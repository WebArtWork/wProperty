import { DatePipe, Location } from '@angular/common';
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
import { PropertytaskService } from 'src/app/modules/propertytask/services/propertytask.service';
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

	proposal: Propertyjobproposal = this._proposalService.new();

	proposals: Propertyjobproposal[] = [];

	tasks: Propertytask[] = [];

	formProposal: FormInterface = this._form.prepareForm(
		propertyjobproposalFormComponents
	);

	formTask: FormInterface = this._form.prepareForm(
		propertytaskFormComponents
	);

	constructor(
		private _proposalService: PropertyjobproposalService,
		private location: Location,
		private _jobService: PropertyjobService,
		public userService: UserService,
		private _http: HttpService,
		private _form: FormService,
		private _core: CoreService,
		private _router: Router,
		private _datePipe: DatePipe,
		private _taskService: PropertytaskService
	) {
		this._loadProposal();

		this._loadJob();
	}

	goBack(): void {
		this.location.back();
	}

	update() {
		this._core.afterWhile(() => {
			this._jobService.update(this.job);
		});
	}

	mutateProposal() {
		this._form.modal<Propertyjobproposal>(
			this.formProposal,
			{
				label: this.proposal._id ? 'Update' : 'Create',
				click: (submition: unknown, close: () => void) => {
					close();

					this._core.copy(submition, this.proposal);

					if (this.proposal._id) {
						this._proposalService.update(
							submition as Propertyjobproposal
						);
					} else {
						this._proposalService
							.create(submition as Propertyjobproposal)
							.subscribe((updated) => {
								this._prepareDates(updated);

								this._core.copy(updated, this.proposal);
							});
					}
				}
			},
			JSON.parse(JSON.stringify(this.proposal))
		);
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

	changeStatus(status: string) {
		this.job.status = status;

		this._http.post('/api/property/status', this.job);
	}

	mutateTask(
		task: Propertytask = {
			job: this.job_id
		} as Propertytask
	) {
		this._form.modal<Propertytask>(
			this.formTask,
			{
				label: task._id ? 'Update' : 'Create',
				click: (submition: unknown, close: () => void) => {
					close();

					this._core.copy(submition, task);

					if (task._id) {
						this._taskService.update(submition as Propertytask);
					} else {
						this._taskService
							.create(submition as Propertytask)
							.subscribe((task) => {
								this.tasks.push(task);
							});
					}
				}
			},
			JSON.parse(JSON.stringify(task))
		);
	}

	deleteTask(task: Propertytask) {
		this._taskService.delete(task);
	}

	private _loadProposal() {
		this._proposalService
			.fetch({
				job: this.job_id
			})
			.subscribe((proposal) => {
				if (proposal) {
					this._prepareDates(proposal);

					this.proposal = proposal;
				}

				const components =
					propertyjobproposalFormComponents.components.filter(
						(c) => c.key === 'start' || c.key === 'deadline'
					) || [];

				for (const component of components) {
					component.hidden = !this.proposal.moreDetails;
				}
			});
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

	private _loadJob() {
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

					if (
						job.status !== 'New' &&
						job.worker === this.userService.user._id
					) {
						this._loadTasks();
					}
				}
			});
	}

	private _loadJobs(property: string) {
		this._jobService
			.get({
				query: 'property=' + property + '&status=New,Assigned'
			})
			.subscribe((jobs) => (this.jobs = jobs));
	}

	private _loadTasks() {
		this._taskService
			.get({
				query: 'job=' + this.job_id
			})
			.subscribe((tasks) => (this.tasks = tasks));
	}

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
}
