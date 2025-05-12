import { CrudDocument } from 'wacom';

export interface Propertytask extends CrudDocument {
	name: string;
	description: string;
	category: string;
	assigned: string; 
	client: string;   
	address: string;
	deadline: string; 
	latitude: Number; 
	longitude: Number; 
	startTime: Number;
	endTime: Number;
}
