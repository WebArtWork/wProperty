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
	propertyTypes: string;
	areas: number;
	thumb: string;
	buildingTypes: String;
	rooms: Number;
	floors: Number;
	renovations: String;
	appliances: String;
	utilities: String;
	nearbys: String;
	sleepingPlaces: Number;
	pets: String;
	minimumbidincrement: Number;
	auctionrules: String;
	auctiondate: Date;
	startingprice: Number;
	price: Number;
	pricePerDay: Number;
	pricePerMountly: Number;
	pricePerPartial: Number;
}
