import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';

interface Material {
	id: number;
	name: string;
}
@Component({
	templateUrl: './materials.component.html',
	styleUrls: ['./materials.component.scss'],
	selector: 'app-materials',
	standalone: false
})
export class MaterialsComponent {
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

	constructor(private _form: FormService) {}

	materials: Material[] = [
		{ id: 1, name: 'Cement' },
		{ id: 2, name: 'Ceramic Brick' },
		{ id: 3, name: 'Construction Sand' },
		{ id: 4, name: 'Granite Gravel' },
		{ id: 5, name: 'Facade Foam' },
		{ id: 6, name: 'Glass Wool' },
		{ id: 7, name: 'Metal Roof Tile' },
		{ id: 8, name: 'Moisture-Resistant Drywall' },
		{ id: 9, name: 'Acrylic Paint' },
		{ id: 10, name: 'Tile Adhesive' },
		{ id: 11, name: 'Bathroom Tile' },
		{ id: 12, name: 'Aluminum Profile' },
		{ id: 13, name: 'Steel Rebar' },
		{ id: 14, name: 'Concrete M300' },
		{ id: 15, name: 'Polished Particleboard' },
		{ id: 16, name: 'Waterproof Plywood' },
		{ id: 17, name: 'Mineral Wool' },
		{ id: 18, name: 'Reinforcing Mesh' },
		{ id: 19, name: 'Parquet Lacquer' },
		{ id: 20, name: 'Gypsum Plaster' },
		{ id: 21, name: 'OSB-3 Board' },
		{ id: 22, name: 'Edged Board' },
		{ id: 23, name: 'Laminate Class 32' },
		{ id: 24, name: 'Floor Tile' },
		{ id: 25, name: 'Slate' },
		{ id: 26, name: 'Nails' },
		{ id: 27, name: 'Wood Screws' },
		{ id: 28, name: 'Silicone Sealant' },
		{ id: 29, name: 'Mounting Foam' },
		{ id: 30, name: 'UD Profile' },
		{ id: 31, name: 'CD Profile' },
		{ id: 32, name: 'Basalt Wool Insulation' },
		{ id: 33, name: 'Double Glazed Unit' },
		{ id: 34, name: 'Metal-Plastic Window' },
		{ id: 35, name: 'Interior Door' },
		{ id: 36, name: 'Metal Front Door' },
		{ id: 37, name: 'Electric Socket' },
		{ id: 38, name: 'VVH Cable' },
		{ id: 39, name: 'PVC Pipe' },
		{ id: 40, name: 'Polypropylene Fittings' },
		{ id: 41, name: 'Ball Valve' },
		{ id: 42, name: 'Ceramic Washbasin' },
		{ id: 43, name: 'Washbasin Siphon' },
		{ id: 44, name: 'Kitchen Faucet' },
		{ id: 45, name: 'Facade Tile' },
		{ id: 46, name: 'Foam Glass Insulation' },
		{ id: 47, name: 'Floor Slab' },
		{ id: 48, name: 'Bitumen Shingles' },
		{ id: 49, name: 'Deep Penetration Primer' },
		{ id: 50, name: 'Sand-Lime Brick' }
	];

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
