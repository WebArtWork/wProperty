import { Injectable } from '@angular/core';
import { Propertyjobproposal } from '../interfaces/propertyjobproposal.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class PropertyjobproposalService extends CrudService<Propertyjobproposal> {
	constructor() {
		super({
			name: 'propertyjobproposal',
		});
	}
}
