import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { propertyserviceFormComponents } from 'src/app/modules/propertyservice/formcomponents/propertyservice.formcomponents';
import { Propertyservice } from 'src/app/modules/propertyservice/interfaces/propertyservice.interface';
import { PropertyserviceService } from 'src/app/modules/propertyservice/services/propertyservice.service';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
	templateUrl: './leads.component.html',
	styleUrls: ['./leads.component.scss'],
	standalone: false
})
export class LeadsComponent {
	property_id = this._router.url.includes('leads/')
		? this._router.url.replace('/leads/', '')
		: null;

	tabs = [
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
		},
		{
			name: 'Test',
			click: () => {}
		},
		{
			name: 'Test',
			click: () => {}
		},
		{
			name: 'Test',
			click: () => {}
		},
		{
			name: 'Test',
			click: () => {}
		},
		{
			name: 'Test',
			click: () => {}
		}
	];

	services: Propertyservice[] = [];

	constructor(
		private _serviceService: PropertyserviceService,
		private _formService: FormService,
		public userService: UserService,
		private _router: Router
	) {
		this._load(this._mineQuery());
	}

	create() {
		this._formService.modal<Propertyservice>(this._form, {
			label: 'Create',
			click: (created: unknown, close: () => void) => {
				close();

				this._serviceService
					.create(created as Propertyservice)
					.subscribe(() => {
						this._load(this._mineQuery());
					});
			}
		});
	}
	private _form: FormInterface = this._formService.getForm(
		'propertyservice',
		propertyserviceFormComponents
	);

	private _query = this._mineQuery();

	private _name = '';

	private _load(query = this._query, name = this._name) {
		this._query = query;

		this._name = name;

		this._serviceService
			.get({ query }, { name })
			.subscribe((services) => (this.services = services));
	}

	private _mineQuery(): string {
		return this.property_id ? 'property=' + this.property_id : '';
	}
}
