import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { propertyFormComponents } from 'src/app/modules/property/formcomponents/property.formcomponents';
import { Property } from 'src/app/modules/property/interfaces/property.interface';
import { PropertyService } from 'src/app/modules/property/services/property.service';
import { environment } from 'src/environments/environment';
import { AlertService, CoreService } from 'wacom';

@Component({
	selector: 'app-myproperty',
	standalone: false,
	templateUrl: './myproperty.component.html',
	styleUrl: './myproperty.component.scss'
})
export class MypropertyComponent {
	readonly url = environment.url;

	readonly types = this._propertyService.types;

	readonly type_icon = this._propertyService.type_icon;

	@Input() property: Property;

	form: FormInterface = this._form.getForm(
		'property',
		propertyFormComponents
	);

	@Output() load = new EventEmitter();

	constructor(
		private _propertyService: PropertyService,
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}

	updateType(type: string) {
		this._form
			.modal<Property>(
				this._propertyService.type_form[type],
				[],
				this.property
			)
			.then((updated: Property) => {
				this._core.copy(updated, this.property);

				this._propertyService.updateType(this.property);
			});
	}

	update(): void {
		this._form
			.modal<Property>(this.form, [], this.property)
			.then((updated: Property) => {
				this._core.copy(updated, this.property);

				this._propertyService.update(this.property);
			});
	}

	delete(): void {
		this._alert.question({
			text: this._translate.translate(
				'Common.Are you sure you want to delete this property?'
			),
			buttons: [
				{
					text: this._translate.translate('Common.No')
				},
				{
					text: this._translate.translate('Common.Yes'),
					callback: async (): Promise<void> => {
						this._propertyService
							.delete(this.property)
							.subscribe(() => {
								this.load.emit();
							});
					}
				}
			]
		});
	}
}
