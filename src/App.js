import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LocationButtonsContainer from "./containers/LocationButtonsContainer";
import StationTrackerContainer from './containers/StationTrackerContainer';
import InfoList from './components/InfoList';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class App extends Component {

  render() {
    return (
      <div className="grid-container" >
        <header className="grid-item">
          <h1>The International Space Station</h1>
        </header>
        <div className="grid-item left">
          <InfoList/>
        </div>
        <div className="grid-item right">
          <h2>Enter your coordinates,<br/>or select from these locations!</h2>
          <LocationButtonsContainer/>
          <StationTrackerContainer />
        </div>
      </div>
  );
  }
}

export default App;
