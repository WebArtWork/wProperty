import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'core-back',
	templateUrl: './back.component.html',
	styleUrls: ['./back.component.scss'],
	standalone: false
})
export class BackComponent {
	constructor(private location: Location) {}

	goBack(): void {
		this.location.back();
	}
}
