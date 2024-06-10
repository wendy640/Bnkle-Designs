
import React from "react";
import "./Modal.css";

interface ModalProps {
	post: any; 
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ post, onClose }) => {
	return (
		<div className="modal-overlay">
			<div className="modal">
				<button className="close-button" onClick={onClose}>
					&times;
				</button>
				<img
					src={post.thumbnail.large}
					alt={post.title}
					className="modal-image"
				/>
				<div className="modal-card-content">
					<h6 className="modal-header">{post.title}</h6>
					<p className="modal-content">{post.content}</p>
					<div className="author-info">
						<img
							src={post.author.avatar}
							alt="author"
							className="author-avatar"
						/>
						<div className="flex-item-left">
							<p>{post.author.name}</p>
							<span className="dash-modal">-</span>
							<p>{post.author.role}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
