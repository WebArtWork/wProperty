import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { PropertyserviceService } from 'src/app/modules/propertyservice/services/propertyservice.service';
import { services } from 'src/app/core/consts/services.const';

@Component({
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss'],
	selector: 'app-services',
	standalone: false
})
export class ServicesComponent {
	readonly services = services;

	searchText = '';

	isMenuOpen = false;

	constructor(
		private _serviceService: PropertyserviceService,
		public userService: UserService
	) {}

	back(): void {
		window.history.back();
	}
}
