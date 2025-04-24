import { Injectable } from '@angular/core';
import { Propertytask } from '../interfaces/propertytask.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class PropertytaskService extends CrudService<Propertytask> {
	constructor() {
		super({
			name: 'propertytask',
		});
	}
}
