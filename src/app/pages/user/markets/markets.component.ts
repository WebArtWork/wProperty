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
				query: 'types=' + this.type
			})
			.subscribe((properties) => (this.properties = properties));
	}
}
