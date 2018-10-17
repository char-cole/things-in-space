import React from 'react';
import FlyoverDisplayContainer from "../containers/FlyoverDisplayContainer";
import { Button } from 'reactstrap';

const StationTracker = (props) => {

  return (
    <div>
    <div className="grid-container trackerContainer">

      <div className="grid-item coordinates">
          
        <input 
          type="number" name="Latitude" min="-180" max="180" step="0.00000001"
          value={props.currentLat}
          onChange={(e) => props.updateLat(e.target.value)}>
        </input>

        <input 
          type="number" name="Longitude" step="0.00000001"
          value={props.currentLong}
          onChange={(e) => props.updateLong(e.target.value)}>
        </input>

      </div>

      <Button
        color="light"
        className="grid-item updateButton"
        onClick={
          (a,b)=> {
            if (props.currentLat >= -180 && props.currentLat <= 180 && props.currentLong >= -180 && props.currentLong <= 180) {
              return props.loadFlyover(props.currentLat,props.currentLong);
            } else alert("Latitude and longitude must each be in decimal form and between -180 and 180")
          }
        }>
        Update Coordinates
      </Button>

      </div>

      {<FlyoverDisplayContainer/>}

    </div>
  );
}

export default StationTracker;
