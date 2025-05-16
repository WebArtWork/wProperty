import { CrudDocument } from 'wacom';

export interface Propertytrade extends CrudDocument {
	name: string;
	description: string;
	property: string;
	type: String;
	price: Number;
	contacts: String;
	comments: String;
}
