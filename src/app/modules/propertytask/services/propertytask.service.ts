import { Injectable } from '@angular/core';
import { Propertytask } from '../interfaces/propertytask.interface';
import { AlertService, CoreService, CrudService, HttpService, StoreService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class PropertytaskService extends CrudService<Propertytask> {
	constructor(_http: HttpService, _store: StoreService, _alert: AlertService, _core: CoreService) {
		super({
			name: 'propertytask'
		},
			_http,
			_store,
			_alert,
			_core
		);
	}
}
