import { Injectable } from '@angular/core';
import { Propertyprovider } from '../interfaces/propertyprovider.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class PropertyproviderService extends CrudService<Propertyprovider> {
	constructor() {
		super({
			name: 'propertyprovider'
		});
	}
}
