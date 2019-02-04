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
      <div className="container" >
        <div className="row">
          <h2 className="text-white px-5 py-2">
            Simply click on the map to begin tracking the
            International Space Station
          </h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <ProjectionInfoContainer />
            <ChangeProjectionButtonsContainer />
          </div>
          <div className="col-12 col-md-9">
            {/* <UpdatePositionButtonContainer /> */}
            <WorldMapContainer />
          </div>
          {/* <div className="rightButtons">
          <LocationButtonsContainer />
          </div> */}
        </div>
        <StationTrackerContainer className=""/>
        {/* <InfoList/> */}
      </div>
  );
  }
}

export default App;
