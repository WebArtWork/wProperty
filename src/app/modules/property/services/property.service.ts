import { Injectable } from '@angular/core';
import { Property } from '../interfaces/property.interface';
import { CrudService } from 'wacom';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { propertyDailyRentFormComponents } from '../formcomponents/property.daily-rent.formcomponents';
import { propertyPartialSaleFormComponents } from '../formcomponents/property.partial-sale.formcomponents';
import { propertyMonthlyRentFormComponents } from '../formcomponents/property.monthly-rent.formcomponents';
import { propertyForSaleFormComponents } from '../formcomponents/property.for-sale.formcomponents';
import { propertyAuctionSaleFormComponents } from '../formcomponents/property.auction-sale.formcomponents';

@Injectable({
	providedIn: 'root'
})
export class PropertyService extends CrudService<Property> {
	types = [
		'For Sale',
		'Partial Sale',
		'Monthly Rent',
		'Daily Rent',
		'Auction Sale'
	];

	type_icon: Record<string, string> = {
		'For Sale': 'sell',
		'Partial Sale': 'splitscreen',
		'Monthly Rent': 'event_note',
		'Daily Rent': 'schedule',
		'Auction Sale': 'gavel'
	};

	type_form: Record<string, FormInterface> = {
		'For Sale': this._form.getForm(
			'propertyForSale',
			propertyForSaleFormComponents
		),
		'Partial Sale': this._form.getForm(
			'propertyPartialSale',
			propertyPartialSaleFormComponents
		),
		'Monthly Rent': this._form.getForm(
			'propertyMonthlyRent',
			propertyMonthlyRentFormComponents
		),
		'Daily Rent': this._form.getForm(
			'propertyDailyRent',
			propertyDailyRentFormComponents
		),
		'Auction Sale': this._form.getForm(
			'propertyAuctionSale',
			propertyAuctionSaleFormComponents
		)
	};

	constructor(private _form: FormService) {
		super({
			name: 'property'
		});
	}
}
