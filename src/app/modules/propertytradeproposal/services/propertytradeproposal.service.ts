import { Injectable } from '@angular/core';
import { Propertytradeproposal } from '../interfaces/propertytradeproposal.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class PropertytradeproposalService extends CrudService<Propertytradeproposal> {
	constructor() {
		super({
			name: 'propertytradeproposal',
		});
	}
}
