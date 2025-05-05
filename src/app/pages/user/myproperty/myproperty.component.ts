import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { propertyFormComponents } from 'src/app/modules/property/formcomponents/property.formcomponents';
import { Property } from 'src/app/modules/property/interfaces/property.interface';
import { Propertyrecord } from 'src/app/modules/propertyrecord/interfaces/propertyrecord.interface';
import { Propertymaterial } from 'src/app/modules/propertymaterial/interfaces/propertymaterial.interface';
import { PropertyService } from 'src/app/modules/property/services/property.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CoreService, AlertService } from 'wacom';


@Component({
	templateUrl: './myproperty.component.html',
	styleUrls: ['./myproperty.component.scss'],
	
	standalone: false,
	animations: [
		trigger('accordionAnimation', [
		  state('closed', style({ height: '0', opacity: 0, overflow: 'hidden' })),
		  state('open', style({ height: '*', opacity: 1 })),
		  transition('closed <=> open', animate('300ms ease-in-out')),
		])
	  ]
})
export class MypropertyComponent {

	isOpen = true;

	toggleAccordion() {
	  this.isOpen = !this.isOpen;
	}

	property = this._propertyService.doc(
		this._router.url.replace('/myproperty/', '')
	);


	constructor(
		private _propertyService: PropertyService,
		private _router: Router,
		private _form: FormService,
		private _core: CoreService,
		private _alert: AlertService,
		private _translate: TranslateService
	) {}

	isMenuOpen = false;

	form: FormInterface = this._form.getForm(
		'property',
		propertyFormComponents
	);
	

	update(prop: Property): void {
		this._form
			.modal<Property>(this.form, [], prop)
			.then((updated: Property) => {
				this._core.copy(updated, prop);
				this._propertyService.update(prop);
			});
	}

	delete(prop: Property): void {
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
					callback: (): void => {
						this._propertyService.delete(prop);
						this._router.navigateByUrl('/myproperties');
					}
				}
			]
		});
	}
}
