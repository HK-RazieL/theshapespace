import React, { Component } from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

class TwitchStream extends Component {
    render() {
        return <div className="streamWindow"><ReactTwitchEmbedVideo channel="Shapes_TV" width="100%" height="900rem" theme="dark" /></div>;
    }
}

export default TwitchStream;