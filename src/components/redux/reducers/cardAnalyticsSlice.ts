import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardAnalytics } from "../../../type";

interface CardAnalyticsState {
  cardAnalytics: CardAnalytics[];
  status: string;
  error: string | null;
}

const initialState: CardAnalyticsState = {
  cardAnalytics: [],
  status: "idle",
  error: null,
};

// Define the slice
const cardAnalyticsSlice = createSlice({
  name: "cardAnalytics",
  initialState,
  reducers: {
    // Define reducers for fetching card analytics
    fetchCardAnalyticsStart(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchCardAnalyticsSuccess(state, action: PayloadAction<CardAnalytics[]>) {
      state.cardAnalytics = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
    fetchCardAnalyticsFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    // Define reducers for updating card analytics
    updateCardAnalytics(state, action: PayloadAction<CardAnalytics[]>) {
      state.cardAnalytics = action.payload;
      // Store data in localStorage here
      //localStorage.setItem('cards', JSON.stringify(action.payload));
    },
  },
});

// Export action creators
export const {
  fetchCardAnalyticsStart,
  fetchCardAnalyticsSuccess,
  fetchCardAnalyticsFailure,
  updateCardAnalytics,
} = cardAnalyticsSlice.actions;

// Export reducer
export default cardAnalyticsSlice.reducer;
