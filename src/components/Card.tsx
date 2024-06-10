import React from "react";
import { Post } from "../type"; 
interface CardProps {
	post: Post;
	onClick: () => void;
	trackAnalytics: (post: Post) => void;
}

const Card: React.FC<CardProps> = ({ post, onClick, trackAnalytics }) => {
	const handleClick = () => {
		trackAnalytics(post);
		onClick();
	};

	return (
		<div className="card" onClick={handleClick}>
			<div className="designs">
				<img src={post.thumbnail.small} alt={post.title} />
			</div>
			<div className="card-content">
				<div className="coloured-dot">
					<div className="blue"></div>
					<div className="orange"></div>
				</div>
				<h6>{post.title}</h6>
				<p>{post.content}</p>
				<div className="author">
					<div className="flex-container-author">
						<div className="flex-item-left">
							<p>{post.author.name}</p>
							<span className="dash">-</span>
							<p>{post.author.role}</p>
						</div>
						<div className="flex-item-right">Nov 25, 2020</div>
					</div>
				</div>
			</div>
			<p className="learn-more">Learn More</p>
		</div>
	);
};

export default Card;
