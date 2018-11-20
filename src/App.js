import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import LocationButtonsContainer from "./containers/LocationButtonsContainer";
import StationTrackerContainer from './containers/StationTrackerContainer';
import ChangeProjectionButtonsContainer from './containers/ChangeProjectionButtonsContainer';
import WorldMapContainer from './containers/WorldMapContainer';
import UpdatePositionButtonContainer from './containers/UpdatePositionButtonContainer';
import ProjectionInfoContainer from './containers/ProjectionInfoContainer';
import InfoList from './components/InfoList';

class App extends Component {

  render() {
    return (
      <div  >
        <header >
          <h1>The International Space Station</h1>
        </header>
        <div className="grid-container mapThings">
          <div className="leftItems">
          <ProjectionInfoContainer />
          <ChangeProjectionButtonsContainer />
          </div>
          <div className="centerButton">
          <UpdatePositionButtonContainer />
          </div>
          <div className="centerMap">
          <WorldMapContainer />
          </div>
          <div className="rightButtons">
          <LocationButtonsContainer />
          </div>
        </div>
        <StationTrackerContainer className="rightTracker"/>
        {/* <InfoList/> */}
      </div>
  );
  }
}

export default App;
