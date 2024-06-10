import React from "react";
import { CardAnalytics } from "../../type";
import "./Analytics.css";

interface AnalyticsProps {
	cardAnalytics: CardAnalytics[];
}

const Analytics: React.FC<AnalyticsProps> = ({ cardAnalytics }) => {
	return (
		<div className="analytics">
			<h2>Card Analytics</h2>
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
		</div>
	);
};

export default Analytics;
