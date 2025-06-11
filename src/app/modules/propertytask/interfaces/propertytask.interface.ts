import { CrudDocument } from 'wacom';

export interface Propertytask extends CrudDocument {
	job: string;
	name: string;
	description: string;
	category: string;
	assigned: string;
	client: string;
	address: string;
	deadline: string;
	latitude: number;
	longitude: number;
	startTime: number;
	endTime: number;

	id: number;
	title: string;
	location: {
		lat: number;
		lng: number;
	};
}
