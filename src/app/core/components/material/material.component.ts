import { Component, Input } from '@angular/core';
import { Material } from '../../interfaces/material.interface';

@Component({
	selector: 'core-material',
	templateUrl: './material.component.html',
	styleUrls: ['./material.component.scss'],
	standalone: false
})
export class MaterialComponent {
	@Input() material: Material;
}
