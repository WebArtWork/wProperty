import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { propertyjobFormComponents } from 'src/app/modules/propertyjob/formcomponents/propertyjob.formcomponents';
import { Propertyjob } from 'src/app/modules/propertyjob/interfaces/propertyjob.interface';
import { PropertyjobService } from 'src/app/modules/propertyjob/services/propertyjob.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { CoreService } from 'wacom';
import { serviceById } from 'src/app/core/consts/services.const';
import { materialById } from 'src/app/core/consts/materials.const';
import { PropertyService } from 'src/app/modules/property/services/property.service';

@Component({
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss'],
	standalone: false
})
export class JobsComponent {
	readonly serviceById = serviceById;

	readonly materialById = materialById;

	property_id = this._router.url.includes('jobs/')
		? this._router.url.replace('/jobs/', '')
		: null;

	pagesTabs = (this._core.isMobile()
		? []
		: [
				{
					name: '',
					icon: 'add',
					click: this.create.bind(this)
				}
		  ]
	).concat([
		{
			name: 'Materials',
			icon: 'build',
			click: () => {
				this._router.navigateByUrl('/materials');
			}
		},
		{
			name: 'Workers',
			icon: 'group',
			click: () => {
				this._router.navigateByUrl('/workers');
			}
		},
		{
			name: 'Services',
			icon: 'assignment',
			click: () => {
				this._router.navigateByUrl('/services');
			}
		}
	]);

	jobsTabs = [
		{
			name: 'Mine',
			click: () => {
				this._load(this._mineQuery(), '');
			},
			active: true
		},
		{
			name: 'Public',
			click: () => {
				this._load('status=New', 'public');
			}
		},
		{
			name: 'Assigned',
			click: () => {
				this._load(
					'status=Assigned&worker=' + this.userService.user._id,
					'public'
				);
			}
		},
		{
			name: 'Completed',
			click: () => {
				this._load(
					'status=Completed&worker=' + this.userService.user._id,
					'public'
				);
			}
		}
	];

	jobs: Propertyjob[] = [];

	constructor(
		_propertyService: PropertyService,
		private _jobService: PropertyjobService,
		private _formService: FormService,
		public userService: UserService,
		private _core: CoreService,
		private _router: Router
	) {
		this._load(this._mineQuery());
	}

	create() {
		this._formService.modal<Propertyjob>(this._form, {
			label: 'Create',
			click: (created: unknown, close: () => void) => {
				close();

				this._jobService
					.create(created as Propertyjob)
					.subscribe(() => {
						this._load(this._mineQuery());
					});
			}
		});
	}
	private _form: FormInterface = this._formService.getForm(
		'propertyjob',
		propertyjobFormComponents
	);

	private _query = this._mineQuery();

	private _name = '';

	private _load(query = this._query, name = this._name) {
		this._query = query;

		this._name = name;

		this._jobService
			.get({ query }, { name })
			.subscribe((jobs) => (this.jobs = jobs));
	}

	private _mineQuery(): string {
		return this.property_id ? 'property=' + this.property_id : '';
	}
}
