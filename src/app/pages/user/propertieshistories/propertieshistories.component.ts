import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { propertyrecordFormComponents } from 'src/app/modules/propertyrecord/formcomponents/propertyrecord.formcomponents';
import { Propertyrecord } from 'src/app/modules/propertyrecord/interfaces/propertyrecord.interface';
import { PropertyrecordService } from 'src/app/modules/propertyrecord/services/propertyrecord.service';

@Component({
	templateUrl: './propertieshistories.component.html',
	styleUrls: ['./propertieshistories.component.scss'],
	standalone: false
})
export class PropertieshistoriesComponent {
	isMenuOpen = false;
	propertyRecords: Propertyrecord[] = [];
	property_id = '';
	constructor(
		private _propertyrecordService: PropertyrecordService,
		private _form: FormService
	) {}

	ngOnInit(): void {
		this.load();
	}

	load(): void {
		this._propertyrecordService
			.get()
			.subscribe((data: Propertyrecord[]) => {
				this.propertyRecords = data;
			});
	}

	/** Форма для створення нового запису історії */
	form: FormInterface = this._form.getForm(
		'propertyrecord',
		propertyrecordFormComponents
	);

	/** Метод створення нового запису історії */
	create(): void {
		this._form.modal<Propertyrecord>(this.form, {
			label: 'Create',
			click: async (created: unknown, close: () => void) => {
				close();

				this._preCreate(created as Propertyrecord);

				this._propertyrecordService
					.create(created as Propertyrecord)
					.subscribe(() => {
						this.load();
					});
			}
		});
	}

	/** Попередня обробка перед створенням */
	private _preCreate(record: Propertyrecord): void {
		delete record.__created; // Видаляємо системне поле, якщо воно є
	}
}
