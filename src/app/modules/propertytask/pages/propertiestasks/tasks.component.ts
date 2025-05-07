import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { PropertytaskService } from '../../services/propertytask.service';
import { Propertytask } from '../../interfaces/propertytask.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { propertytaskFormComponents } from '../../formcomponents/propertytask.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.scss'],
	standalone: false,
})
export class TasksComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('propertytask', propertytaskFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._propertytaskService.setPerPage.bind(this._propertytaskService),
		allDocs: false,
		create: (): void => {
			

			this._form.modal<Propertytask>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Propertytask);

					await firstValueFrom(
						this._propertytaskService.create(created as Propertytask)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Propertytask): void => {
			this._form
				.modal<Propertytask>(this.form, [], doc)
				.then((updated: Propertytask) => {
					this._core.copy(updated, doc);

					this._propertytaskService.update(doc);
				});
		},
		delete: (doc: Propertytask): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this propertytask?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._propertytaskService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Propertytask): void => {
					this._form.modalUnique<Propertytask>('propertytask', 'url', doc);
				},
			},
		],
		headerButtons: [
			{
				icon: 'playlist_add',
				click: this._bulkManagement(),
				class: 'playlist',
			},
			{
				icon: 'edit_note',
				click: this._bulkManagement(false),
				class: 'edit',
			},
		],
	};

	rows: Propertytask[] = [];

	constructor(
		private _translate: TranslateService,
		private _propertytaskService: PropertytaskService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {
		this.setRows();
	}

	setRows(page = this._page): void {
		this._page = page;

		this._core.afterWhile(
			this,
			() => {
				this._propertytaskService.get({ page }).subscribe((rows) => {
					this.rows.splice(0, this.rows.length);

					this.rows.push(...rows);
				});
			},
			250
		);
	}

	private _page = 1;

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Propertytask>(create ? [] : this.rows)
				.then(async (propertytasks: Propertytask[]) => {
					if (create) {
						for (const propertytask of propertytasks) {
							this._preCreate(propertytask);

							await firstValueFrom(
								this._propertytaskService.create(propertytask)
							);
						}
					} else {
						for (const propertytask of this.rows) {
							if (
								!propertytasks.find(
									(localPropertytask) => localPropertytask._id === propertytask._id
								)
							) {
								await firstValueFrom(
									this._propertytaskService.delete(propertytask)
								);
							}
						}

						for (const propertytask of propertytasks) {
							const localPropertytask = this.rows.find(
								(localPropertytask) => localPropertytask._id === propertytask._id
							);

							if (localPropertytask) {
								this._core.copy(propertytask, localPropertytask);

								await firstValueFrom(
									this._propertytaskService.update(localPropertytask)
								);
							} else {
								this._preCreate(propertytask);

								await firstValueFrom(
									this._propertytaskService.create(propertytask)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(propertytask: Propertytask): void {
		delete propertytask.__created;
	}
}
