import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { PropertyserviceService } from '../../services/propertyservice.service';
import { Propertyservice } from '../../interfaces/propertyservice.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { propertyserviceFormComponents } from '../../formcomponents/propertyservice.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './propertiesservices.component.html',
	styleUrls: ['./propertiesservices.component.scss'],
	standalone: false,
})
export class PropertiesservicesComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('propertyservice', propertyserviceFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._propertyserviceService.setPerPage.bind(this._propertyserviceService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Propertyservice>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Propertyservice);

					await firstValueFrom(
						this._propertyserviceService.create(created as Propertyservice)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Propertyservice): void => {
			this._form
				.modal<Propertyservice>(this.form, [], doc)
				.then((updated: Propertyservice) => {
					this._core.copy(updated, doc);

					this._propertyserviceService.update(doc);
				});
		},
		delete: (doc: Propertyservice): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this propertyservice?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._propertyserviceService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Propertyservice): void => {
					this._form.modalUnique<Propertyservice>('propertyservice', 'url', doc);
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

	rows: Propertyservice[] = [];

	constructor(
		private _translate: TranslateService,
		private _propertyserviceService: PropertyserviceService,
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
				this._propertyserviceService.get({ page }).subscribe((rows) => {
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
				.modalDocs<Propertyservice>(create ? [] : this.rows)
				.then(async (propertyservices: Propertyservice[]) => {
					if (create) {
						for (const propertyservice of propertyservices) {
							this._preCreate(propertyservice);

							await firstValueFrom(
								this._propertyserviceService.create(propertyservice)
							);
						}
					} else {
						for (const propertyservice of this.rows) {
							if (
								!propertyservices.find(
									(localPropertyservice) => localPropertyservice._id === propertyservice._id
								)
							) {
								await firstValueFrom(
									this._propertyserviceService.delete(propertyservice)
								);
							}
						}

						for (const propertyservice of propertyservices) {
							const localPropertyservice = this.rows.find(
								(localPropertyservice) => localPropertyservice._id === propertyservice._id
							);

							if (localPropertyservice) {
								this._core.copy(propertyservice, localPropertyservice);

								await firstValueFrom(
									this._propertyserviceService.update(localPropertyservice)
								);
							} else {
								this._preCreate(propertyservice);

								await firstValueFrom(
									this._propertyserviceService.create(propertyservice)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(propertyservice: Propertyservice): void {
		delete propertyservice.__created;
	}
}
