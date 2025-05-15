import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';

interface Service {
	id: number;
	name: string;
	description: string;
	image: string;
}

@Component({
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss'],
	selector: 'app-services',
	standalone: false
})
export class ServicesComponent {
	formDoc: FormInterface = this._form.getForm('docForm', {
		formId: 'docForm',
		title: 'Doc form',
		components: [
			/* ... */
		]
	});

	searchText: string = '';

	filteredServices(): Service[] {
		if (!this.searchText) {
			return this.services;
		}
		return this.services.filter((service) =>
			service.name.toLowerCase().includes(this.searchText.toLowerCase())
		);
	}

	isMenuOpen = false;

	constructor(public userService: UserService, private _form: FormService) {}

	back(): void {
		window.history.back();
	}

	services: Service[] = [
		{
			id: 1,
			name: 'General Contracting',
			description:
				'Complete construction management and execution services.',
			image: 'general-contracting.png'
		},
		{
			id: 2,
			name: 'Architectural Design',
			description:
				'Creative and functional design solutions for buildings.',
			image: 'architectural-design.png'
		},
		{
			id: 3,
			name: 'Renovation & Remodeling',
			description:
				'Interior and exterior remodeling for homes and offices.',
			image: 'renovation-remodeling.png'
		},
		{
			id: 4,
			name: 'Electrical Installation',
			description: 'Safe and certified electrical system installations.',
			image: 'electrical-installation.png'
		},
		{
			id: 5,
			name: 'Plumbing Services',
			description:
				'Reliable plumbing solutions for all types of buildings.',
			image: 'plumbing-services.png'
		},
		{
			id: 6,
			name: 'Roofing',
			description: 'Durable and weather-resistant roofing solutions.',
			image: 'roofing.png'
		},
		{
			id: 7,
			name: 'Painting & Finishing',
			description:
				'Interior and exterior painting and surface finishing.',
			image: 'painting-finishing.png'
		},
		{
			id: 8,
			name: 'Concrete Work',
			description: 'Foundation laying, paving, and concrete finishing.',
			image: 'concrete-work.png'
		}
	];

	private loadServices(): void {
		// this._propertyworkerService
		// 	.get()
		// 	.subscribe((data: Propertyworker[]) => {
		// 		this.workers = data;
		// 	});
	}
	load(): void {
		this.loadServices();
	}

	create(): void {
		this._form.modal(this.formDoc, {
			label: 'Create',
			click: (data, close) => {
				console.log('Submitted data:', data);
				close();
			}
		});
	}
}
