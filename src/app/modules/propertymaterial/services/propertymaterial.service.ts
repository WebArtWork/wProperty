import { Injectable } from '@angular/core';
import { Propertymaterial } from '../interfaces/propertymaterial.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class PropertymaterialService extends CrudService<Propertymaterial> {
	constructor() {
		super({
			name: 'propertymaterial'
		});
	}
}
