import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { Property } from 'src/app/modules/property/interfaces/property.interface';
import { User } from 'src/app/modules/user/interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-hub-info',
	templateUrl: './hub-info.component.html',
	styleUrls: ['./hub-info.component.scss'],
	imports: [CommonModule]
})
export class HubInfoComponent implements OnInit {
	property!: Property;
	author?: User;
	type: string = '';
	images: string[] = [
		'assets/prop.jpg',
		'assets/prop2.jpg',
		'assets/prop3.jpg'
	];

	currentIndex = 0; // для слайдера

	constructor(public userService: UserService) {}

	ngOnInit(): void {
		const state = history.state;
		if (state && state.property) {
			this.property = state.property;
			this.type = state.type || '';
		}
	}

	prev() {
		this.currentIndex =
			this.currentIndex === 0
				? this.images.length - 1
				: this.currentIndex - 1;
	}

	next() {
		this.currentIndex =
			this.currentIndex === this.images.length - 1
				? 0
				: this.currentIndex + 1;
	}

	goToSlide(index: number) {
		this.currentIndex = index;
	}
}
