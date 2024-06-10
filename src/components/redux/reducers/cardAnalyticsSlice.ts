// src/components/redux/reducers/cardAnalyticsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardAnalytics } from "../../../type";

interface CardAnalyticsState {
	cardAnalytics: CardAnalytics[];
	loading: boolean;
	error: string | null;
}

const initialState: CardAnalyticsState = {
	cardAnalytics: [],
	loading: false,
	error: null,
};

const cardAnalyticsSlice = createSlice({
	name: "cardAnalytics",
	initialState,
	reducers: {
		fetchCardAnalyticsStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchCardAnalyticsSuccess(state, action: PayloadAction<CardAnalytics[]>) {
			state.loading = false;
			state.cardAnalytics = action.payload;
		},
		fetchCardAnalyticsFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
		updateCardAnalytics(state, action: PayloadAction<CardAnalytics[]>) {
			state.cardAnalytics = action.payload;
		},
	},
});

export const {
	fetchCardAnalyticsStart,
	fetchCardAnalyticsSuccess,
	fetchCardAnalyticsFailure,
	updateCardAnalytics,
} = cardAnalyticsSlice.actions;

export default cardAnalyticsSlice.reducer;
