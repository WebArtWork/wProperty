import { CrudDocument } from 'wacom';

export interface Propertyworker extends CrudDocument {
	name: string;
	description: string;
	provider: string;
	fullname: String;
	position: String;
	experience: Number;
	task: String;
	status: String;
}
