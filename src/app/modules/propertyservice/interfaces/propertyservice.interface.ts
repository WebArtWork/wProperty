import { CrudDocument } from 'wacom';

export interface Propertyservice extends CrudDocument {
	name: string;
	description: string;
	provider: string;
}

export interface ServiceUnit {
	name: string;
	type: string;
	use: number;
}

export interface Service {
	id: number;
	name: string;
	description: string;
	image: string;
	materials: number[];
	units: ServiceUnit[];
	// service: string;
	// price: number;
	// contact: string;
}
