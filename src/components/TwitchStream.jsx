import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const TwitchStream = () => {
	return <div className="streamWindow"><ReactTwitchEmbedVideo channel="Shapes_TV" width="100%" height="900rem" theme="dark" /></div>;
}

export default TwitchStream;