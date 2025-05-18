import { Component, Input } from '@angular/core';
import { Material } from 'src/app/modules/propertymaterial/interfaces/propertymaterial.interface';

@Component({
	selector: 'core-material',
	templateUrl: './material.component.html',
	styleUrls: ['./material.component.scss'],
	standalone: false
})
export class MaterialComponent {
	@Input() material: Material;
}
