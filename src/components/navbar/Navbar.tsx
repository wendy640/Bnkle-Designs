
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure you have a CSS file for the Navbar

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-brand">
					Trending Designs
				</Link>
				<div className="navbar-links">
					<Link to="/" className="navbar-link">
						Home
					</Link>
					<Link to="/analytics" className="navbar-link">
						Analytics
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
