import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/modules/property/interfaces/property.interface';
import { PropertyService } from 'src/app/modules/property/services/property.service';

@Component({
	templateUrl: './markets.component.html',
	styleUrls: ['./markets.component.scss'],
	standalone: false
})
export class MarketsComponent {
	readonly selectType = this._router.url === '/hub';

	readonly type = !this.selectType
		? this._router.url.split('/')[2].replace('%20', ' ')
		: '';

	readonly showAuthorDetails = this._router.url.length < 4;

	readonly types = this._propertyService.types;

	readonly type_icon = this._propertyService.type_icon;

	readonly propertyTypes = [
		'Apartment',
		'House',
		'Office',
		'Penthouse',
		'Studio',
		'Loft',
		'Townhouse',
		'Duplex',
		'Commercial Space',
		'Retail Space',
		'Warehouse',
		'Cottage',
		'Mansion',
		'Room',
		'Dormitory'
	];

	readonly rooms = ['1 room', '2 rooms', '3+ rooms'];

	readonly floors = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

	readonly areas = [
		'Up to 30 m²',
		'31 - 50 m²',
		'51 - 70 m²',
		'71 - 100 m²',
		'101 - 150 m²',
		'Above 150 m²'
	];

	readonly buildingTypes = [
		'Tsar-era Building',
		'Stalinka',
		'Khrushchevka',
		'Czech-style',
		'Dormitory'
	];

	readonly renovations = [
		'Euro Renovation',
		'Cosmetic Repair',
		'Emergency Condition',
		'Newly Built'
	];

	readonly appliances = [
		'Furnished',
		'Unfurnished',
		'Electric Kettle',
		'Coffee Machine',
		'Hair Dryer',
		'Stove',
		'Oven',
		'Microwave',
		'Multicooker',
		'Air Conditioner',
		'Bathtub',
		'Shower Cabin',
		'Walk-in Closet',
		'Loggia',
		'Terrace'
	];

	readonly utilities = [
		'Gas',
		'Electricity',
		'Central Water Supply',
		'Well',
		'Sewerage',
		'Garbage Disposal',
		'Elevator',
		'Internet'
	];

	readonly nearbys = [
		'Kindergarten',
		'School',
		'Bus Stop',
		'Metro',
		'Market',
		'Store'
	];

	readonly prices = [
		'Up to 500,000',
		'500,000 - 1,000,000',
		'Above 1,000,000'
	];

	selectedPropertyTypes: string[] = [];

	selectedRooms: string[] = [];

	selectedFloors: string[] = [];

	selectedAreas: string[] = [];

	selectedBuildingTypes: string[] = [];

	selectedRenovations: string[] = [];

	selectedAppliances: string[] = [];

	selectedUtilities: string[] = [];

	selectedNearbys: string[] = [];

	selectedPrices: string[] = [];

	isMenuOpen = false;

	properties: Property[] = [];

	constructor(
		private _propertyService: PropertyService,
		private _router: Router
	) {
		if (!this.selectType) {
			this.load();
		}
	}

	load() {
		this._propertyService
			.get({
				query: this.obj2query({
					types: this.type,
					propertyTypes: this.selectedPropertyTypes,
					rooms: this.selectedRooms,
					floors: this.selectedFloors,
					areas: this.selectedAreas,
					buildingTypes: this.selectedBuildingTypes,
					renovations: this.selectedRenovations,
					appliances: this.selectedAppliances,
					utilities: this.selectedUtilities,
					nearbys: this.selectedNearbys,
					prices: this.selectedPrices
				})
			})
			.subscribe((properties) => (this.properties = properties));
	}

	obj2query(
		obj: Record<string, string | number | string[] | number[]>
	): string {
		let query = '';

		for (const field in obj) {
			const value = this.data2string(obj[field]);

			if (!value) continue;

			query += (query ? '&' : '') + field + '=' + value;
		}

		return query;
	}

	data2string(
		data: string | number | string[] | number[],
		join = ','
	): string {
		return Array.isArray(data) ? data.join(join) : data + '';
	}
}
