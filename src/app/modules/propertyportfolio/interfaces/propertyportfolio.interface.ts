import { CrudDocument } from 'wacom';

export interface Propertyportfolio extends CrudDocument {
	name: string;
	description: string;
	images: string[];
}
