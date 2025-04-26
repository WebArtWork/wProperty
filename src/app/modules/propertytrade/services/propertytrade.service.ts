import { Injectable } from '@angular/core';
import { Propertytrade } from '../interfaces/propertytrade.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class PropertytradeService extends CrudService<Propertytrade> {
	constructor() {
		super({
			name: 'propertytrade'
		});
	}
}
