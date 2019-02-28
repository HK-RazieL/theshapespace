import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import Twitter from "../styles/images/twitter-panel.png"
import YouTube from "../styles/images/youtube-panel.png"
import Discord from "../styles/images/discord-panel.png"
import PyroGaming from "../styles/images/pyrogaming-panel.png"

class Contacts extends Component {
    newTabLink = (link) => {
        window.open(link, '_blank');
    }

    render() {
        return (
        <div className="contacts">
            <h1 className="title">Contacts</h1>
            <ul className="card" style={{background: 222, listStyleType: "none"}}>
                <li><img onClick={() => { this.newTabLink("https://twitter.com/pyrogaming_gg")}} src={PyroGaming} alt="PyroGaming" target="_blank"/></li><br />
                <li><img onClick={() => { this.newTabLink("https://twitter.com/shapesum")}} src={Twitter} alt="Twitter" target="_blank" /></li><br />
                <li><img onClick={() => { this.newTabLink("https://www.youtube.com/channel/UC2jdX9ygiRxfj0APcjFpuEw")}} src={YouTube} alt="YouTube" style={{maxWidth: "320px"}} target="_blank" /></li><br />
                <li><img onClick={() => { this.newTabLink("https://discord.gg/dKy4WC5")}} src={Discord} alt="Discord"  target="_blank" /></li><br />
            </ul>
        </div>
        )        
    }
}

export default Contacts;