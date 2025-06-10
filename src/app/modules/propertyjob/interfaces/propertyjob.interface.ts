import { CrudDocument } from 'wacom';

export interface Propertyjob extends CrudDocument {
	author: string;
	name: string;
	description: string;
	start: string;
	deadline: string;
	property: string;
	worker: string;
	status: string;
	services: {
		id: number;
	}[];
	materials: {
		id: number;
	}[];
}
