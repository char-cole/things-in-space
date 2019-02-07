import React from 'react';
import LocationButtonsContainer from '../containers/LocationButtonsContainer';
import StationTrackerContainer from '../containers/StationTrackerContainer';

const Flyover = () => {
    return (
        <div className="container" >
        <div className="row">
          <h2 className="text-white px-5 py-2">
            When will the ISS be overhead next?
          </h2>
        </div>
        <div className="row">
          <div className="col-12">
            <StationTrackerContainer />
          </div>
          <div className="col-12">
            <LocationButtonsContainer />
          </div>
        </div>
      </div>
    )
}

export default Flyover;