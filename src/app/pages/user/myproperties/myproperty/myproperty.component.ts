import { Component, Input } from '@angular/core';
import { Property } from 'src/app/modules/property/interfaces/property.interface';

@Component({
	selector: 'app-myproperty',
	standalone: false,

	templateUrl: './myproperty.component.html',
	styleUrl: './myproperty.component.scss'
})
export class MypropertyComponent {
	@Input() property: Property;
}
