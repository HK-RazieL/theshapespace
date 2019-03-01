import React from 'react';
import { Link } from "react-router-dom";
import Avatar from "../styles/images/avatar.png"

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
		<img src={Avatar} alt="Icon" style={{marginRight: "10px"}}/>
		<Link className="navbar-brand" to="/">The Shape Space</Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/about">About</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/contacts">Contacts</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/stream">Stream</Link>
				</li>
			</ul>
		</div>
	</nav>);
}

export default Navigation;