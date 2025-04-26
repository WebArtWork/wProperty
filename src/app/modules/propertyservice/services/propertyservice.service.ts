import { Injectable } from '@angular/core';
import { Propertyservice } from '../interfaces/propertyservice.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class PropertyserviceService extends CrudService<Propertyservice> {
	constructor() {
		super({
			name: 'propertyservice'
		});
	}
}
