import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { materials } from 'src/app/core/consts/materials.const';
import { Material } from 'src/app/core/interfaces/material.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { Location } from '@angular/common';

@Component({
	templateUrl: './materials.component.html',
	styleUrls: ['./materials.component.scss'],
	selector: 'app-materials',
	standalone: false
})
export class MaterialsComponent {
	readonly materials = materials;

	service_id = this._router.url.includes('materials/')
		? Number(this._router.url.replace('/materials/', ''))
		: 0;

	isMenuOpen = false;

	formDoc: FormInterface | undefined;

	searchText: string = '';

	filteredMaterials(): Material[] {
		if (!this.searchText) return this.materials;

		const lower = this.searchText.toLowerCase();

		return this.materials.filter((mat) =>
			mat.name.toLowerCase().includes(lower)
		);
	}

	constructor(
		private _form: FormService,
		private _router: Router,
		private location: Location
	) {}
	goBack(): void {
		this.location.back();
	}
	create(): void {
		if (!this.formDoc) {
			console.warn('formDoc не визначено');

			return;
		}

		this._form.modal(this.formDoc, {
			label: 'Create',
			click: (data: any, close: () => void) => {
				console.log('Submitted data:', data);

				close();
			}
		});
	}
}
