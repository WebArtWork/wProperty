import { CrudDocument } from 'wacom';

export interface Propertyservice extends CrudDocument {
	author: string;
	name: string;
	description: string;
	deadline: string;
	property: string;
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
