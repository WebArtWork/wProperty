import { Component, Input } from '@angular/core';
import { Propertyprovider } from 'src/app/modules/propertyprovider/interfaces/propertyprovider.interface';

@Component({
	selector: 'app-provider',
	standalone: false,

	templateUrl: './provider.component.html',
	styleUrl: './provider.component.scss'
})
export class ProviderComponent {
	@Input() provider: Propertyprovider;
}
