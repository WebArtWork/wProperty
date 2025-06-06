import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Property } from 'src/app/modules/property/interfaces/property.interface';

@Component({
	selector: 'app-hub-info',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './hub-info.component.html',
	styleUrls: ['./hub-info.component.scss']
})
export class HubInfoComponent implements OnInit {
	property!: Property;
	type: string = '';

	ngOnInit(): void {
		const state = history.state;
		if (state && state.property) {
			this.property = state.property;
			this.type = state.type || '';
		}
	}
}
