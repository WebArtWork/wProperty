import { CrudDocument } from 'wacom';

export interface Propertyprovider extends CrudDocument {
	name: string;
	description: string;
	companyname: String;
	contacts: String;
	servicetype: String;
	experience: Number;
	rating: Number;
}
