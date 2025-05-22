import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { PropertyserviceService } from 'src/app/modules/propertyservice/services/propertyservice.service';
import { Router } from '@angular/router';
import { Propertyservice } from 'src/app/modules/propertyservice/interfaces/propertyservice.interface';
import { CoreService } from 'wacom';
import { propertyserviceproposalFormComponents } from 'src/app/modules/propertyserviceproposal/formcomponents/propertyserviceproposal.formcomponents';
import { PropertyserviceproposalService } from 'src/app/modules/propertyserviceproposal/services/propertyserviceproposal.service';

@Component({
	templateUrl: './lead.component.html',
	styleUrls: ['./lead.component.scss'],
	standalone: false
})
export class LeadComponent {
	service_id = this._router.url.replace('/project/', '');

	service: Propertyservice = this._serviceService.new();

	services: Propertyservice[] = [];

	formProposal: FormInterface = this._form.getForm(
		'propertyserviceproposal',
		propertyserviceproposalFormComponents
	);

	submitionProposal: Record<string, unknown> = {};

	constructor(
		private _proposalService: PropertyserviceproposalService,
		private _serviceService: PropertyserviceService,
		public userService: UserService,
		private _form: FormService,
		private _core: CoreService,
		private _router: Router
	) {
		this._proposalService
			.fetch({
				service: this.service_id
			})
			.subscribe((proposal) => {
				if (proposal) {
					this._core.copy(proposal, this.submitionProposal);
				}
			});

		this._serviceService
			.fetch({ _id: this.service_id })
			.subscribe((service) => {
				this.service = service;

				if (service.property) {
					this._serviceService
						.get({
							query:
								'property=' +
								service.property +
								'&status=New,Assigned'
						})
						.subscribe((services) => (this.services = services));
				}
			});
	}

	update() {
		this._core.afterWhile(() => {
			this._serviceService.update(this.service);
		});
	}

	updateProposal() {
		console.log(this.submitionProposal);
	}
}
