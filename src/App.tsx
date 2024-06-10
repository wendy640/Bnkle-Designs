import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AnalyticsContainer from "./components/AnalyticsContainer";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Provider } from "react-redux";
import store from "./components/redux/store";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/analytics" element={<AnalyticsContainer />} />
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
