import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { materials } from 'src/app/core/consts/materials.const';
import { Router } from '@angular/router';
import { services } from 'src/app/core/consts/services.const';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './service.component.html',
	styleUrls: ['./service.component.scss'],
	standalone: false
})
export class ServiceComponent {
	readonly service_id = Number(this._router.url.replace('/service/', ''));

	readonly materials = materials.filter((m) =>
		m.services.includes(this.service_id)
	);

	readonly service = services.find((s) => s.id === this.service_id);

	readonly url = environment.url;

	formDoc: FormInterface = this._form.getForm('docForm', {
		formId: 'docForm',
		title: 'Doc form',
		components: [
			{
				name: 'Text',
				key: 'name',
				focused: true,
				fields: [
					{
						name: 'Placeholder',
						value: 'Enter your name'
					},
					{
						name: 'Label',
						value: 'Name'
					}
				]
			},
			{
				name: 'Text',
				key: 'phone',
				fields: [
					{
						name: 'Placeholder',
						value: 'Enter your phone'
					},
					{
						name: 'Label',
						value: 'Phone'
					}
				]
			},
			{
				name: 'Text',
				key: 'bio',
				fields: [
					{
						name: 'Placeholder',
						value: 'Enter your bio'
					},
					{
						name: 'Label',
						value: 'Bio'
					},
					{
						name: 'Textarea',
						value: true
					}
				]
			},
			{
				name: 'Button',
				fields: [
					{
						name: 'Label',
						value: "Let's go"
					},
					{
						name: 'Submit',
						value: true
					}
				]
			}
		]
	});

	constructor(
		public userService: UserService,
		private _form: FormService,
		private _router: Router
	) {}
}
