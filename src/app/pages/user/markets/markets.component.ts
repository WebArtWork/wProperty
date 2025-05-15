import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { appliances } from 'src/app/core/consts/appliances.const';
import { areas } from 'src/app/core/consts/areas.const';
import { buildingTypes } from 'src/app/core/consts/buildingTypes.const';
import { floors } from 'src/app/core/consts/floors.const';
import { nearbys } from 'src/app/core/consts/nearbys.const';
import { prices } from 'src/app/core/consts/prices.const';
import { propertyTypes } from 'src/app/core/consts/propertyTypes.const';
import { renovations } from 'src/app/core/consts/renovations.const';
import { rooms } from 'src/app/core/consts/rooms.const';
import { utilities } from 'src/app/core/consts/utilities.const';
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
