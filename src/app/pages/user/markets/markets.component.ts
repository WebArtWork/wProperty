import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/modules/property/services/property.service';

@Component({
	templateUrl: './markets.component.html',
	styleUrls: ['./markets.component.scss'],
	standalone: false
})
export class MarketsComponent {
	readonly selectType = this._router.url === '/hub';

	readonly showAuthorDetails = this._router.url.length < 4;

	readonly types = this._propertyService.types;

	readonly type_icon = this._propertyService.type_icon;

	isMenuOpen = false;

	constructor(
		private _propertyService: PropertyService,
		private _router: Router
	) {}
}
