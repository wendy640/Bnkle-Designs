// src/types.ts
export interface Post {
	id: number;
	date: number;
	title: string;
	content: string;
	thumbnail: {
		large: string;
		small: string;
	};
	author: {
		name: string;
		avatar?: string; // avatar might be optional
		role: string;
	};
}
export interface CardAnalytics {
	//serialNumber:number;
	cardId: number;
	cardTitle: string;
	clickCount: number
}
