import { Injectable } from '@angular/core';
import { Property } from '../interfaces/property.interface';
import { CrudService } from 'wacom';

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

	constructor() {
		super({
			name: 'property'
		});
	}
}
