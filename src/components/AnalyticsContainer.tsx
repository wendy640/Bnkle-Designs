import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store"; 
import { updateCardAnalytics } from "../components/redux/reducers/cardAnalyticsSlice";
import Analytics from "./pages/Analytics"; 

const AnalyticsContainer: React.FC = () => {
	const dispatch = useDispatch();
	const cardAnalytics = useSelector(
		(state: RootState) => state.cardAnalytics.cardAnalytics
	);

	useEffect(() => {
		const storedCardAnalytics = localStorage.getItem("cards");
		if (storedCardAnalytics) {
			const parsedAnalytics = JSON.parse(storedCardAnalytics);
			console.log("Fetched card analytics from localStorage:", parsedAnalytics); 
			dispatch(updateCardAnalytics(parsedAnalytics));
		}
	}, [dispatch]);

	useEffect(() => {
		console.log("Card analytics in Redux state:", cardAnalytics); 
	}, [cardAnalytics]);

	return <Analytics cardAnalytics={cardAnalytics} />;
};

export default AnalyticsContainer;
