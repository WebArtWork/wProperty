import { Component, Input } from '@angular/core';

@Component({
	selector: 'property-icon',
	templateUrl: './property.component.html',
	styleUrls: ['./property.component.scss'],
	standalone: false
})
export class PropertyComponent {
	@Input() color = 'black';
}
