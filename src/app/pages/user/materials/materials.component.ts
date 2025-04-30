import { Component } from '@angular/core';

@Component({
	templateUrl: './materials.component.html',
	styleUrls: ['./materials.component.scss'],
	standalone: false
})
export class MaterialsComponent {
	isMenuOpen=false;
}
create(): void {
	this._form.modal(this.formDoc, {
		label: 'Create',
		click: (data, close) => {
			console.log('Submitted data:', data);
			close();
		},
	});
}
