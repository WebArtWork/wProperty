export interface Tab {
	name: string;
	active?: boolean;
	click: (name: string, index: number) => void;
}
