import { Injectable } from '@angular/core';
import { Propertyserviceproposal } from '../interfaces/propertyserviceproposal.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class PropertyserviceproposalService extends CrudService<Propertyserviceproposal> {
	constructor() {
		super({
			name: 'propertyserviceproposal',
		});
	}
}
