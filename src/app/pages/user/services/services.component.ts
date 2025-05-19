import { Component } from '@angular/core';
import { services } from 'src/app/core/consts/services.const';

@Component({
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss'],
	selector: 'app-services',
	standalone: false
})
export class ServicesComponent {
	readonly services = services;

	back(): void {
		window.history.back();
	}
}
