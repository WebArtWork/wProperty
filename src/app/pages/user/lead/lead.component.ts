import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { PropertyserviceService } from 'src/app/modules/propertyservice/services/propertyservice.service';
import { Router } from '@angular/router';
import { Propertyservice } from 'src/app/modules/propertyservice/interfaces/propertyservice.interface';

@Component({
	templateUrl: './lead.component.html',
	styleUrls: ['./lead.component.scss'],
	standalone: false
})
export class LeadComponent {
	service_id = this._router.url.replace('/lead/', '');

	service: Propertyservice = this._serviceService.new();

	services: Propertyservice[] = [];

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
		private _serviceService: PropertyserviceService,
		public userService: UserService,
		private _form: FormService,
		private _router: Router
	) {
		this._serviceService
			.fetch({ _id: this.service_id })
			.subscribe((service) => {
				this.service = service;

				this._serviceService
					.get({
						query:
							'property=' +
							service.property +
							'&status=New,Assigned'
					})
					.subscribe((services) => (this.services = services));
			});
	}
}
