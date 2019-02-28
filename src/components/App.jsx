import React, { Component } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import HomePage from "./HomePage";
import Contacts from "./Contacts";
import TwitchStream from "./TwitchStream";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Navigation />
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/stream" component={TwitchStream} />
        </div>
      </HashRouter>
    )
  }
}

export default App;