import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { Router } from '@angular/router';
import { CoreService } from 'wacom';
import { Propertyjob } from 'src/app/modules/propertyjob/interfaces/propertyjob.interface';
import { propertyjobFormComponents } from 'src/app/modules/propertyjob/formcomponents/propertyjob.formcomponents';
import { propertyjobproposalFormComponents } from 'src/app/modules/propertyjobproposal/formcomponents/propertyjobproposal.formcomponents';
import { PropertyjobproposalService } from 'src/app/modules/propertyjobproposal/services/propertyjobproposal.service';
import { PropertyjobService } from 'src/app/modules/propertyjob/services/propertyjob.service';

@Component({
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.scss'],
	standalone: false
})
export class JobComponent {
	service_id = this._router.url.replace('/job/', '');

	service: Propertyjob = this._jobService.new();

	services: Propertyjob[] = [];

	formProposal: FormInterface = this._form.getForm(
		'propertyjobproposalForm',
		propertyjobproposalFormComponents
	);

	submitionProposal: Record<string, unknown> = {};

	constructor(
		private _proposalService: PropertyjobproposalService,
		private _jobService: PropertyjobService,
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

		this._jobService
			.fetch({ _id: this.service_id })
			.subscribe((service) => {
				this.service = service;

				if (service.property) {
					this._jobService
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
			this._jobService.update(this.service);
		});
	}

	updateProposal() {
		console.log(this.submitionProposal);
	}
}
