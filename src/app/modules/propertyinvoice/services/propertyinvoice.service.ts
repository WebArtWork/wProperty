import { Injectable } from '@angular/core';
import { Propertyinvoice } from '../interfaces/propertyinvoice.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class PropertyinvoiceService extends CrudService<Propertyinvoice> {
	constructor() {
		super({
			name: 'propertyinvoice',
		});
	}
}
