import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { Propertyjob } from 'src/app/modules/propertyjob/interfaces/propertyjob.interface';
import { PropertyjobService } from 'src/app/modules/propertyjob/services/propertyjob.service';
import { propertyjobproposalFormComponents } from 'src/app/modules/propertyjobproposal/formcomponents/propertyjobproposal.formcomponents';
import { Propertyjobproposal } from 'src/app/modules/propertyjobproposal/interfaces/propertyjobproposal.interface';
import { PropertyjobproposalService } from 'src/app/modules/propertyjobproposal/services/propertyjobproposal.service';
import { propertytaskFormComponents } from 'src/app/modules/propertytask/formcomponents/propertytask.formcomponents';
import { Propertytask } from 'src/app/modules/propertytask/interfaces/propertytask.interface';
import { UserService } from 'src/app/modules/user/services/user.service';
import { CoreService, HttpService } from 'wacom';

@Component({
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.scss'],
	standalone: false
})
export class JobComponent {
	job_id = this._router.url.replace('/job/', '');

	job: Propertyjob = this._jobService.new();

	jobs: Propertyjob[] = [];

	proposals: Propertyjobproposal[] = [];

	formProposal: FormInterface = this._form.prepareForm(
		propertyjobproposalFormComponents
	);

	formTask: FormInterface = this._form.prepareForm(
		propertytaskFormComponents
	);

	submitionProposal: Record<string, unknown> = {
		job: this.job_id
	};

	constructor(
		private _proposalService: PropertyjobproposalService,
		private _jobService: PropertyjobService,
		public userService: UserService,
		private _http: HttpService,
		private _form: FormService,
		private _core: CoreService,
		private _router: Router,
		private _datePipe: DatePipe
	) {
		this._proposalService
			.fetch({
				job: this.job_id
			})
			.subscribe((proposal) => {
				if (proposal) {
					this._proposalExists = true;

					this._prepareDates(proposal);

					this._core.copy(proposal, this.submitionProposal);
				}

				const components =
					propertyjobproposalFormComponents.components.filter(
						(c) => c.key === 'start' || c.key === 'deadline'
					) || [];

				for (const component of components) {
					component.hidden = !this.submitionProposal['moreDetails'];
				}
			});

		this._jobService
			.fetch({ _id: this.job_id }, { name: 'public' })
			.subscribe((job) => {
				if (job) {
					this.job = job;

					if (job.author === this.userService.user._id) {
						this._loadProposals();
					}

					if (job.property) {
						this._loadJobs(job.property);
					}
				}
			});
	}

	update() {
		this._core.afterWhile(() => {
			this._jobService.update(this.job);
		});
	}

	updateProposal() {
		if (this._proposalExists) {
			this._proposalService.update(
				this.submitionProposal as unknown as Propertyjobproposal
			);
		} else {
			this._proposalService
				.create(
					this.submitionProposal as unknown as Propertyjobproposal
				)
				.subscribe((proposal) => {
					this._proposalExists = true;

					this._prepareDates(proposal);

					this._core.copy(proposal, this.submitionProposal);
				});
		}
	}

	moreDetails(proposal: Propertyjobproposal) {
		proposal.moreDetails = true;

		this._http.post('/api/property/details', proposal);
	}

	assignWorker(proposal: Propertyjobproposal) {
		this.job.worker = proposal.author;

		this.job.start = proposal.start;

		this.job.deadline = proposal.deadline;

		this._http.post('/api/property/assign', proposal);
	}

	createTask() {
		this._form.modal<Propertytask>(this.formTask, {
			label: 'Create',
			click: (submition: unknown, close: () => void) => {
				close();
			}
		});
	}

	private _proposalExists = false;

	private _prepareDates(proposal: Propertyjobproposal) {
		proposal.start = this._datePipe.transform(
			proposal.start,
			'yyyy-MM-dd'
		) as string;

		proposal.deadline = this._datePipe.transform(
			proposal.deadline,
			'yyyy-MM-dd'
		) as string;
	}

	private _loadJobs(property: string) {
		this._jobService
			.get({
				query: 'property=' + property + '&status=New,Assigned'
			})
			.subscribe((jobs) => (this.jobs = jobs));
	}

	private _loadProposals() {
		this._proposalService
			.get(
				{
					query: 'job=' + this.job_id
				},
				{
					name: 'public'
				}
			)
			.subscribe((proposals) => (this.proposals = proposals));
	}
}
