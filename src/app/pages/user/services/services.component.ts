import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';

@Component({
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss'],
	standalone: false,
})
export class ServicesComponent {
	formDoc: FormInterface = this._form.getForm('docForm', {
		formId: 'docForm',
		title: 'Doc form',
		components: [ /* ... */ ]
	});

	isMenuOpen = false;

	constructor(public userService: UserService, private _form: FormService) {}

	back(): void {
		window.history.back();
	}

	

	private loadServices(): void {
		// this._propertyworkerService
		// 	.get()
		// 	.subscribe((data: Propertyworker[]) => {
		// 		this.workers = data;
		// 	});
	}
	load(): void {
		this.loadServices();
	}

	create(): void {
		this._form.modal(this.formDoc, {
			label: 'Create',
			click: (data, close) => {
				console.log('Submitted data:', data);
				close();
			},
		});
	}
}