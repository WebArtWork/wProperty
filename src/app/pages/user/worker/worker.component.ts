import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { Router } from '@angular/router';
import { Service } from 'src/app/modules/propertyservice/interfaces/propertyservice.interface';
import { services } from 'src/app/core/consts/services.const';
import { Material } from 'src/app/modules/propertymaterial/interfaces/propertymaterial.interface';
import { materials } from 'src/app/core/consts/materials.const';

@Component({
	templateUrl: './worker.component.html',
	styleUrls: ['./worker.component.scss'],
	standalone: false
})
export class WorkerComponent {
	get services(): number[] {
		return (this.user.data['services'] as number[]) || [];
	}

	service: Record<number, Service> = {};

	get materials(): number[] {
		return (this.user.data['materials'] as number[]) || [];
	}

	material: Record<number, Material> = {};

	user_id = this._router.url.replace('/worker/', '');

	user = this.userService.doc(this.user_id);

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
	) {
		for (const service of services) {
			this.service[service.id] = service;
		}

		for (const material of materials) {
			this.material[material.id] = material;
		}
	}

	back(): void {
		window.history.back();
	}
}
