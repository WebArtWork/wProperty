import { Component, Input } from '@angular/core';
import { Service } from 'src/app/core/interfaces/service.interface';

@Component({
	selector: 'core-service',
	templateUrl: './service.component.html',
	styleUrls: ['./service.component.scss'],
	standalone: false
})
export class ServiceComponent {
	@Input() service: Service;
}
