import { CrudDocument } from 'wacom';

export interface Property extends CrudDocument {
	_id: string; // Додано поле _id
	name: string; // Додано поле name
	description: string; // Додано поле description
	address: string;
	type: string;
	area: number;
	price: number;
}
