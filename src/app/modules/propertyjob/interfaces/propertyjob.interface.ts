import { CrudDocument } from 'wacom';

export interface Propertyjob extends CrudDocument {
	author: string;
	name: string;
	description: string;
	deadline: string;
	property: string;
	status: string;
	services: {
		id: number;
	}[];
	materials: {
		id: number;
	}[];
}
