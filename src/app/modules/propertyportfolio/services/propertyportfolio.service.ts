import { Injectable } from '@angular/core';
import { Propertyportfolio } from '../interfaces/propertyportfolio.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class PropertyportfolioService extends CrudService<Propertyportfolio> {
	constructor() {
		super({
			name: 'propertyportfolio',
		});
	}
}
