import { Injectable } from '@angular/core';
import { Propertyjob } from '../interfaces/propertyjob.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class PropertyjobService extends CrudService<Propertyjob> {
	constructor() {
		super({
			name: 'propertyjob',
		});
	}
}
