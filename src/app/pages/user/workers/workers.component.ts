import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
	templateUrl: './workers.component.html',
	styleUrls: ['./workers.component.scss'],
	standalone: false
})
export class WorkersComponent {
	service_id = this._router.url.includes('service/')
		? Number(this._router.url.replace('/workers/service/', ''))
		: 0;

	material_id = this._router.url.includes('material/')
		? Number(this._router.url.replace('/workers/material/', ''))
		: 0;

	isMenuOpen = false;

	constructor(public userService: UserService, private _router: Router) {}
}
