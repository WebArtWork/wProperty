import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { propertyworkerFormComponents } from 'src/app/modules/propertyworker/formcomponents/propertyworker.formcomponents';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
	templateUrl: './workers.component.html',
	styleUrls: ['./workers.component.scss'],
	standalone: false
})
export class WorkersComponent {
	isMenuOpen = false;

	constructor(private _form: FormService, public userService: UserService) {}

	/** Створення нового працівника */
	form: FormInterface = this._form.getForm(
		'propertyworker',
		propertyworkerFormComponents
	);
}
