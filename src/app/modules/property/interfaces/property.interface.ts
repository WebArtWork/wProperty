import { CrudDocument } from 'wacom';

export interface Property extends CrudDocument {
	isForSale?: boolean;
	isPartialSale?: boolean;
	isMonthlyRent?: boolean;
	isDailyRent?: boolean;
	isAuctionSale?: boolean;
	types: string[];
	name: string;
	description: string;
	address: string;
	type: string;
	area: number;
	thumb: string;
	buildingtype: String;
	rooms: Number;
	floor: Number;
	renovation: String;
	appliances: String;
	utilities: String;
	nearby: String;
	parking: String;
	sleepingPlaces: Number;
	pets: String;
	minimumbidincrement: Number;
	auctionrules: String;
	auctiondate: Number;
	startingprice: Number;
	price: Number;
}
