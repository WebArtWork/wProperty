import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { Router } from '@angular/router';
import { materials } from 'src/app/core/consts/materials.const';
import { Service } from 'src/app/core/interfaces/service.interface';
import { services } from 'src/app/core/consts/services.const';
import { Material } from 'src/app/core/interfaces/material.interface';
import { Location } from '@angular/common';

@Component({
	templateUrl: './material.component.html',
	styleUrls: ['./material.component.scss'],
	standalone: false
})
export class MaterialComponent {
	material: Material = materials.find(
		(m) => m.id === Number(this._router.url.replace('/material/', ''))
	) as Material;

	services: Service[] = services.filter((s) =>
		s.materials.includes(this.material.id)
	);

	constructor(
		public userService: UserService,
		private _router: Router,
		private location: Location
	) {}
	goBack(): void {
		this.location.back();
	}
}
