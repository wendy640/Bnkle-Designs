import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import Modal from "../modal/Modal";
import { Post, CardAnalytics } from "../../type";
import {
	fetchCardAnalyticsStart,
	fetchCardAnalyticsSuccess,
	fetchCardAnalyticsFailure,
	updateCardAnalytics,
} from "../redux/reducers/cardAnalyticsSlice";
import { RootState } from "../redux/store";

const Home: React.FC = () => {
	const [localPosts, setLocalPosts] = useState<Post[]>([]);
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);
	const dispatch = useDispatch();
	const loading = useSelector(
		(state: RootState) => state.cardAnalytics.loading
	);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(fetchCardAnalyticsStart());
			try {
				const response = await fetch(
					"https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
				);
				const data = await response.json();

				// Artificially delay the loading state
				setTimeout(() => {
					setLocalPosts(data);
					const initialCardAnalytics = data.map((post: Post) => ({
						cardId: post.id,
						cardTitle: post.title,
						clickCount: 0,
					}));
					localStorage.setItem("cards", JSON.stringify(initialCardAnalytics));
					dispatch(fetchCardAnalyticsSuccess(initialCardAnalytics));
					dispatch(updateCardAnalytics(initialCardAnalytics));
				}, 2000); // Delay for 2 seconds (2000 milliseconds)
			} catch (error) {
				dispatch(fetchCardAnalyticsFailure((error as Error).message));
			}
		};

		fetchData();
	}, [dispatch]);

	const handleCardClick = (post: Post) => {
		trackAnalytics(post);
		setSelectedPost(post);
	};

	const trackAnalytics = (post: Post) => {
		const storedCard = localStorage.getItem("cards");
		if (storedCard) {
			const parseObject = JSON.parse(storedCard) as CardAnalytics[];
			const updatedAnalytics = parseObject.map((card) => {
				if (card.cardId === post.id) {
					return { ...card, clickCount: card.clickCount + 1 };
				}
				return card;
			});
			localStorage.setItem("cards", JSON.stringify(updatedAnalytics));
			dispatch(updateCardAnalytics(updatedAnalytics));
		}
	};

	const handleCloseModal = () => {
		setSelectedPost(null);
	};

	return (
		<div className="container">
			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				localPosts.map((post) => (
					<Card
						key={post.id}
						post={post}
						onClick={() => handleCardClick(post)}
						trackAnalytics={trackAnalytics}
					/>
				))
			)}
			{selectedPost && <Modal post={selectedPost} onClose={handleCloseModal} />}
		</div>
	);
};

export default Home;
