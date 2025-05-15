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
	type: string; // Визначаємо допустимі значення типу
	area: number;
	price: number;
	thumb: string;
}
