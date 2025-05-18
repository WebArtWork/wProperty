import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
	service_id = this._router.url.includes('service/')
		? Number(this._router.url.replace('/workers/service/', ''))
		: 0;

	material_id = this._router.url.includes('material/')
		? Number(this._router.url.replace('/workers/material/', ''))
		: 0;

	isMenuOpen = false;

	constructor(
		public userService: UserService,
		private _form: FormService,
		private _router: Router
	) {}
}
