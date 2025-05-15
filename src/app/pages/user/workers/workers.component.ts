import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { propertyworkerFormComponents } from 'src/app/modules/propertyworker/formcomponents/propertyworker.formcomponents';
import { Propertyworker } from 'src/app/modules/propertyworker/interfaces/propertyworker.interface';
import { PropertyworkerService } from 'src/app/modules/propertyworker/services/propertyworker.service';
import { User } from 'src/app/modules/user/interfaces/user.interface';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
	templateUrl: './workers.component.html',
	styleUrls: ['./workers.component.scss'],
	standalone: false
})
export class WorkersComponent {
	isMenuOpen = false;

	constructor(
		private _propertyworkerService: PropertyworkerService,
		private _form: FormService,
		private _userService: UserService
	) {}

	get workers(): User[] {
		return this._userService.usersByRole['propertyworker'];
	}

	/*ngOnInit(): void {
		this.loadWorkers();
	}

	private loadWorkers(): void {
		this._propertyworkerService
			.get()
			.subscribe((data: Propertyworker[]) => {
				this.workers = data;
			});
	}
	load(): void {
		this.loadWorkers();
	}


	form: FormInterface = this._form.getForm(
		'propertyworker',
		propertyworkerFormComponents
	);

	create(): void {
		this._form.modal<Propertyworker>(this.form, {
			label: 'Create',
			click: async (created: unknown, close: () => void) => {
				close();

				this._preCreate(created as Propertyworker);

				this._propertyworkerService
					.create(created as Propertyworker)
					.subscribe(() => {
						this.loadWorkers();
					});
			}
		});
	}

	private _preCreate(worker: Propertyworker): void {
		delete worker.__created; 
	}*/
}
