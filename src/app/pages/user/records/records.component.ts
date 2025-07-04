import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { propertyrecordFormComponents } from 'src/app/modules/propertyrecord/formcomponents/propertyrecord.formcomponents';
import { Propertyrecord } from 'src/app/modules/propertyrecord/interfaces/propertyrecord.interface';
import { PropertyrecordService } from 'src/app/modules/propertyrecord/services/propertyrecord.service';

@Component({
	templateUrl: './records.component.html',
	styleUrls: ['./records.component.scss'],
	standalone: false
})
export class RecordsComponent {
	propertyRecords: Propertyrecord[] = [];

	isMenuOpen = false;

	property_id = '';

	constructor(
		private _recordService: PropertyrecordService,
		private _route: ActivatedRoute,
		private _form: FormService
	) {
		this._route.paramMap.subscribe((params) => {
			this.property_id = params.get('property_id') || '';

			this.load();
		});
	}

	form: FormInterface = this._form.getForm(
		'propertyrecord',
		propertyrecordFormComponents
	);

	create(): void {
		this._form.modal<Propertyrecord>(this.form, {
			label: 'Create',
			click: async (created: unknown, close: () => void) => {
				close();

				this._preCreate(created as Propertyrecord);

				this._recordService
					.create(created as Propertyrecord)
					.subscribe(() => {
						this.load();
					});
			}
		});
	}

	load(): void {
		this._recordService
			.get({ page: 1, query: this._query() })
			.subscribe((records) => {
				this.propertyRecords.splice(0, this.propertyRecords.length);

				this.propertyRecords.push(...records);
			});
	}
	type = '';

	private _query(): string {
		let query = '';

		if (this.property_id) {
			query += (query ? '&' : '') + 'property=' + this.property_id;
		}

		if (this.type) {
			query += (query ? '&' : '') + 'type=' + this.type;
		}

		return query;
	}

	private _preCreate(record: Propertyrecord): void {
		delete record.__created;

		if (this.property_id) {
			record.property = this.property_id;
		}

		if (this.type) {
			record.property = this.type;
		}
	}
}
