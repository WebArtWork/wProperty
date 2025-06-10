import { CrudDocument } from 'wacom';

export interface Propertyunit {
	name: string;
	type: string;
	use: number;
	price: number;
}

export interface Propertyjobproposal extends CrudDocument {
	author: string;
	name: string;
	description: string;
	price: number;
	workdays: number;
	start: string;
	deadline: string;
	moreDetails: boolean;
	units: Propertyunit[];
}
