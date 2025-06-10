import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { appliances } from 'src/app/core/consts/appliances.const';
import { areas } from 'src/app/core/consts/areas.const';
import { buildingTypes } from 'src/app/core/consts/buildingTypes.const';
import { floors } from 'src/app/core/consts/floors.const';
import { nearbys } from 'src/app/core/consts/nearbys.const';
import { prices } from 'src/app/core/consts/prices.const';
import { pets } from 'src/app/core/consts/pets.const';
import { sleepingPlaces } from 'src/app/core/consts/sleepingPlaces.const';
import { propertyTypes } from 'src/app/core/consts/propertyTypes.const';
import { renovations } from 'src/app/core/consts/renovations.const';
import { rooms } from 'src/app/core/consts/rooms.const';
import { utilities } from 'src/app/core/consts/utilities.const';
import { Property } from 'src/app/modules/property/interfaces/property.interface';
import { PropertyService } from 'src/app/modules/property/services/property.service';
import { Location } from '@angular/common';

@Component({
	templateUrl: './hub.component.html',
	styleUrls: ['./hub.component.scss'],
	standalone: false
})
export class HubComponent {
	readonly selectType = this._router.url === '/hub';

	readonly type = !this.selectType
		? this._router.url.split('/')[2].replace('%20', ' ')
		: '';

	readonly showAuthorDetails = this._router.url.length < 4;

	readonly types = this._propertyService.types;

	readonly type_icon = this._propertyService.type_icon;

	readonly propertyTypes = propertyTypes;

	readonly rooms = rooms;

	readonly floors = floors;

	readonly areas = areas;

	readonly buildingTypes = buildingTypes;

	readonly renovations = renovations;

	readonly appliances = appliances;

	readonly utilities = utilities;

	readonly nearbys = nearbys;

	readonly prices = prices;

	readonly pets = pets;

	readonly sleepingPlaces = sleepingPlaces;

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

	selectedPets: string[] = [];

	selectedSleepingPlaces: string[] = [];

	isMenuOpen = false;

	properties: Property[] = [];

	constructor(
		private _propertyService: PropertyService,
		private location: Location,
		private _router: Router
	) {
		if (!this.selectType) {
			this.load();
		}
	}

	/**price and area filtering */

	areaMap: Record<string, [number, number]> = {
		'Up to 30 m²': [0, 30],
		'31 - 50 m²': [31, 50],
		'51 - 70 m²': [51, 70],
		'71 - 100 m²': [71, 100],
		'101 - 150 m²': [101, 150],
		'Above 150 m²': [151, Infinity]
	};

	priceMap: Record<string, [number, number]> = {
		'Up to 500,000': [0, 500000],
		'500,000 - 1,000,000': [500000, 1000000],
		'Above 1,000,000': [1000001, Infinity]
	};
	getRangeBounds(selected: string[], map: Record<string, [number, number]>) {
		let min = Infinity;
		let max = -Infinity;

		selected.forEach((label) => {
			const [low, high] = map[label];
			min = Math.min(min, low);
			max = Math.max(max, high);
		});

		return min === Infinity || max === -Infinity ? null : [min, max];
	}
	goBack(): void {
		this.location.back();
	}
	load(): void {
		const areaRange = this.getRangeBounds(this.selectedAreas, this.areaMap);
		const priceRange = this.getRangeBounds(
			this.selectedPrices,
			this.priceMap
		);

		const query = this.obj2query({
			types: this.type,
			propertyTypes: this.selectedPropertyTypes,
			rooms: this.selectedRooms,
			floors: this.selectedFloors,
			buildingTypes: this.selectedBuildingTypes,
			renovations: this.selectedRenovations,
			appliances: this.selectedAppliances,
			utilities: this.selectedUtilities,
			nearbys: this.selectedNearbys,
			pets: this.selectedPets,
			sleepingPlaces: this.selectedSleepingPlaces
			// НЕ додавайте prices і areas сюди
		});

		this._propertyService.get({ query }).subscribe((all: Property[]) => {
			this.properties = all.filter((prop) => {
				const area = Number(prop.areas);
				const price = Number(prop.price);

				const areaMatch =
					!areaRange ||
					(area >= areaRange[0] && area <= areaRange[1]);
				const priceMatch =
					!priceRange ||
					(price >= priceRange[0] && price <= priceRange[1]);

				return areaMatch && priceMatch;
			});
		});
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
