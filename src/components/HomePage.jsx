import React from "react";
import HomePanel from "../styles/images/pyrogaming-background-panel.png";

const HomePage = () => {
	return (
		<div style={{textAlign: "center",}}>
			<h1 className="title home">Welcome To The Shape Space!</h1>
			<img src={HomePanel} alt="PyroGaming" />
		</div>
	)
}

export default HomePage;