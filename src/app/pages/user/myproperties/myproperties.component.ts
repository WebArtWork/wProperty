import { Component } from '@angular/core';
import { Property } from 'src/app/modules/property/interfaces/property.interface';
import { PropertyService } from 'src/app/modules/property/services/property.service';

@Component({
	templateUrl: './myproperties.component.html',
	styleUrls: ['./myproperties.component.scss'],
	standalone: false
})
export class MypropertiesComponent {
	isMenuOpen = false;
	properties: Property[] = []; // Змінено назву на "properties"

	constructor(private _propertyService: PropertyService) {}

	ngOnInit(): void {
		this.loadProperties();
	}

	private loadProperties(): void {
		this._propertyService.get().subscribe((data: Property[]) => {
			this.properties = data;
		});
	}
}
