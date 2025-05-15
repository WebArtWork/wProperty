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

	updateType(property: Property) {
		property.types = property.types || [];

		if (property.isForSale && !property.types.includes('For Sale')) {
			property.types.push('For Sale');
		} else if (!property.isForSale && property.types.includes('For Sale')) {
			property.types.splice(property.types.indexOf('For Sale'), 1);
		}

		if (
			property.isPartialSale &&
			!property.types.includes('Partial Sale')
		) {
			property.types.push('Partial Sale');
		} else if (
			!property.isPartialSale &&
			property.types.includes('Partial Sale')
		) {
			property.types.splice(property.types.indexOf('Partial Sale'), 1);
		}

		if (
			property.isMonthlyRent &&
			!property.types.includes('Monthly Rent')
		) {
			property.types.push('Monthly Rent');
		} else if (
			!property.isMonthlyRent &&
			property.types.includes('Monthly Rent')
		) {
			property.types.splice(property.types.indexOf('Monthly Rent'), 1);
		}

		if (property.isDailyRent && !property.types.includes('Daily Rent')) {
			property.types.push('Daily Rent');
		} else if (
			!property.isDailyRent &&
			property.types.includes('Daily Rent')
		) {
			property.types.splice(property.types.indexOf('Daily Rent'), 1);
		}

		if (
			property.isAuctionSale &&
			!property.types.includes('Auction Sale')
		) {
			property.types.push('Auction Sale');
		} else if (
			!property.isAuctionSale &&
			property.types.includes('Auction Sale')
		) {
			property.types.splice(property.types.indexOf('Auction Sale'), 1);
		}

		this.update(property);
	}
}
