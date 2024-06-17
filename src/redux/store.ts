import { configureStore } from "@reduxjs/toolkit";
import cardAnalyticsReducer from "./reducers/cardAnalyticsSlice";

const store = configureStore({
	reducer: {
		cardAnalytics: cardAnalyticsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
