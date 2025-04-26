import { Injectable } from '@angular/core';
import { Propertyworker } from '../interfaces/propertyworker.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class PropertyworkerService extends CrudService<Propertyworker> {
	constructor() {
		super({
			name: 'propertyworker'
		});
	}
}
