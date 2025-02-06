import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/modules/property/services/property.service';

@Component({
	templateUrl: './myproperty.component.html',
	styleUrls: ['./myproperty.component.scss'],
	standalone: false
})
export class MypropertyComponent {
	property = this._propertyService.doc(
		this._router.url.replace('/myproperty/', '')
	);
	constructor(
		private _propertyService: PropertyService,
		private _router: Router
	) {}
}
