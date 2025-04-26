import { Injectable } from '@angular/core';
import { Property } from '../interfaces/property.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class PropertyService extends CrudService<Property> {
	constructor() {
		super({
			name: 'property'
		});
	}
}
