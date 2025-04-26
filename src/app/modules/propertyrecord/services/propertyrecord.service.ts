import { Injectable } from '@angular/core';
import { Propertyrecord } from '../interfaces/propertyrecord.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class PropertyrecordService extends CrudService<Propertyrecord> {
	constructor() {
		super({
			name: 'propertyrecord'
		});
	}
}
