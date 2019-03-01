import React from 'react';
import Twitter from "../styles/images/twitter-panel.png"
import YouTube from "../styles/images/youtube-panel.png"
import Discord from "../styles/images/discord-panel.png"
import PyroGaming from "../styles/images/pyrogaming-panel.png"

const Contacts = () => {
	const newTabLink = (link) => {
		window.open(link, '_blank');
	}

	return (
		<div className="contacts">
			<h1 className="title">Contacts</h1>
			<ul className="card" style={{background: 222, listStyleType: "none"}}>
				<li><img onClick={() => {newTabLink("https://twitter.com/pyrogaming_gg")}} src={PyroGaming} alt="PyroGaming" target="_blank"/></li><br />
				<li><img onClick={() => {newTabLink("https://twitter.com/shapesum")}} src={Twitter} alt="Twitter" target="_blank" /></li><br />
				<li><img onClick={() => {newTabLink("https://www.youtube.com/channel/UC2jdX9ygiRxfj0APcjFpuEw")}} src={YouTube} alt="YouTube" style={{maxWidth: "320px"}} target="_blank" /></li><br />
				<li><img onClick={() => {newTabLink("https://discord.gg/dKy4WC5")}} src={Discord} alt="Discord"  target="_blank" /></li><br />
			</ul>
		</div>
	)        
}

export default Contacts;