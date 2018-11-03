import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LocationButtonsContainer from "./containers/LocationButtonsContainer";
import StationTrackerContainer from './containers/StationTrackerContainer';
import WorldMapContainer from './containers/WorldMapContainer';
import InfoList from './components/InfoList';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class App extends Component {

  render() {
    return (
      <div  >
        <header >
          <h1>The International Space Station</h1>
        </header>
        <div >
          <WorldMapContainer/>
          <InfoList/>
        </div>
        <div >
          <h2>Enter your coordinates,<br/>or select from these locations!</h2>
          <LocationButtonsContainer/>
          <StationTrackerContainer />
        </div>
      </div>
  );
  }
}

export default App;
