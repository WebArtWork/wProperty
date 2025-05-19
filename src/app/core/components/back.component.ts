import { Component } from '@angular/core';

@Component({
	selector: 'core-back',
	templateUrl: './back.component.html',
	styleUrls: ['./back.component.scss'],
	standalone: false
})
export class BackComponent {
	back(): void {
		window.history.back();
	}
}
