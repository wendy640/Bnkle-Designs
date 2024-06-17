import React from "react";
import { CardAnalytics } from "../../type";
import "./Analytics.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";



const Analytics: React.FC = () => {
	const cardAnalytics = useSelector(
		(state: RootState) => state.cardAnalytics.cardAnalytics
	);
	return (
		<div className="analytics">
			<h2>Card Analytics</h2>
			{cardAnalytics.length === 0 ? (
				<p>No card analytics available</p>
			) : (
				<table>
					<thead>
						<tr>
							<th>S/N</th>
							<th>Card ID</th>
							<th>Card Title</th>
							<th>Number of Clicks</th>
						</tr>
					</thead>
					<tbody>
						{cardAnalytics.map((card, index) => (
							<tr key={card.cardId}>
								<td>{index + 1}</td>
								<td>{card.cardId}</td>
								<td>{card.cardTitle}</td>
								<td>{card.clickCount}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Analytics;
