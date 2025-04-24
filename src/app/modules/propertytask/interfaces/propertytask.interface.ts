import { CrudDocument } from 'wacom';

export interface Propertytask extends CrudDocument {
	name: string;
	description: string;
}
