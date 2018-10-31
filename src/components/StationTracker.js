import React from 'react';
import FlyoverDisplayContainer from "../containers/FlyoverDisplayContainer";
import { Button } from 'reactstrap';

const StationTracker = (props) => {

  return (
    <div>
    <div className="grid-container trackerContainer">

      <div className="grid-item coordinates">
          
        <input 
          type="number" name="Latitude" min="-90" max="90" step="0.00000001"
          value={props.inputLat}
          onChange={(e) => props.updateLat(e.target.value)}>
        </input>

        <input 
          type="number" name="Longitude" step="0.00000001"
          value={props.inputLong}
          onChange={(e) => props.updateLong(e.target.value)}>
        </input>

      </div>

      <Button
        color="light"
        className="grid-item updateButton"
        onClick={
          (a,b)=> {
            if (props.inputLat >= -90 && props.inputLat <= 90 && props.inputLong >= -180 && props.inputLong <= 180) {
              return props.loadFlyover(props.inputLat,props.inputLong);
            } else alert("Latitude can only be between -90 and 90. Longitude can only be between -180 and 180.")
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
