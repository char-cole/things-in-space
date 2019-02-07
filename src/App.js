import React, { Component } from 'react';
import './App.css';
import TrackingMap from './components/TrackingMap';
import Flyover from './components/Flyover';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div>
          <div id="wrapper">
            <nav
              className="navbar navbar-inverse navbar-fixed-top"
              role="navigation">
              <a href='/'>Home</a>
              <a href='/flyover'>Flyover</a>
            </nav>
            <div style={{backgroundColor: "black"}}>
              <Switch>
                <Route path="/flyover" component={Flyover} />
                <Route path="/" component={TrackingMap} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
