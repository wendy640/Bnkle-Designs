import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import Modal from "../modal/Modal";
import { CardAnalytics, Post } from "../../type";
import {
	fetchCardAnalyticsStart,
	fetchCardAnalyticsSuccess,
	fetchCardAnalyticsFailure,
	updateCardAnalytics,
} from "../../redux/reducers/cardAnalyticsSlice";
import { RootState } from "../../redux/store";

const Home: React.FC = () => {
	const [localPosts, setLocalPosts] = useState<Post[]>([]);
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);
	const dispatch = useDispatch();
	const status = useSelector((state: RootState) => state.cardAnalytics.status);
	const records = useSelector(
		(state: RootState) => state.cardAnalytics.cardAnalytics
	);
	// Clear local storage (e.g., for logout or reset)
	//localStorage.removeItem("analytics");
	useEffect(() => {
		console.log(status);
		if (status === "idle" || records.length === 0) {
			//dispatch(fetchCardAnalyticsStart());
			const fetchData = async () => {
				try {
					const response = await fetch(
						"https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
					);
					const data = await response.json();

					setLocalPosts(data);

					const initialCardAnalytics = defineCardanalytics(data);
				
					localStorage.setItem("posts", JSON.stringify(data));
					

					dispatch(fetchCardAnalyticsSuccess(initialCardAnalytics));
				} catch (error) {
					dispatch(fetchCardAnalyticsFailure((error as Error).message));
				}
			};

	
			fetchData();
		
		} else {
			const storedPosts = localStorage.getItem("posts");
			if (storedPosts) {
				setLocalPosts(JSON.parse(storedPosts));
			}
		}
	}, [dispatch, status, records.length]);

	const handleCardClick = (post: Post) => {
		setSelectedPost(post);
	};
	const defineCardanalytics = (data: any) => {
		const initialCardAnalytics: CardAnalytics[] = data.map((post: Post) => ({
			cardId: post.id,
			cardTitle: post.title,
			clickCount: 0,
		}));
		return initialCardAnalytics;
	};
	const trackAnalytics = (post: Post) => {
		if (records) {
			const updatedAnalytics = records.map((card) => {
				if (card.cardId === post.id) {
					return { ...card, clickCount: card.clickCount + 1 };
				}
				return card;
			});
		
			dispatch(updateCardAnalytics(updatedAnalytics));
		}
	};

	const handleCloseModal = () => {
		setSelectedPost(null);
	};

	return (
		<div className="container">
			{localPosts.map((post) => (
				<Card
					key={post.id}
					post={post}
					onClick={() => handleCardClick(post)}
					trackAnalytics={trackAnalytics}
				/>
			))}
			{selectedPost && <Modal post={selectedPost} onClose={handleCloseModal} />}
		</div>
	);
};

export default Home;
