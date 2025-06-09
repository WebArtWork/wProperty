import { CrudDocument } from 'wacom';
import { User } from 'src/app/modules/user/interfaces/user.interface';

export interface Property extends CrudDocument {
	author: string;
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
	rooms: String;
	floors: String;
	renovations: String;
	appliances: String;
	utilities: String;
	nearbys: String;
	sleepingPlaces: String;
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
