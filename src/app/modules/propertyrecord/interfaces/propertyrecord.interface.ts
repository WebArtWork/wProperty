import { CrudDocument } from 'wacom';

export interface Propertyrecord extends CrudDocument {
	name: string;
	description: string;
	property: string;
	price: Number;
	materials: [String];
	photos: [String];
	service: String;
	incident: String;
	rent: String;
}
