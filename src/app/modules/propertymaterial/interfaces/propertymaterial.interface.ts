import { CrudDocument } from 'wacom';

export interface Propertymaterial extends CrudDocument {
	name: string;
	description: string;
	quantity: number;
	supplier: string;
	price: number;
}

export interface Material {
	id: number;
	name: string;
	services: number[];
	image: string;
	description: string;
}
