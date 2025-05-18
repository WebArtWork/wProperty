import { CrudDocument } from 'wacom';

export interface Propertyservice extends CrudDocument {
	name: string;
	description: string;
	provider: string;
}

export interface Service {
	id: number;
	name: string;
	description: string;
	image: string;
	materials: number[];
	// service: string;
	// price: number;
	// contact: string;
}
