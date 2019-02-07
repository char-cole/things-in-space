import React from 'react';
import ChangeProjectionButtonsContainer from '../containers/ChangeProjectionButtonsContainer';
import WorldMapContainer from '../containers/WorldMapContainer';
import ProjectionInfoContainer from '../containers/ProjectionInfoContainer';

const TrackingMap = () => {
    return (
        <div className="container" >
        <div className="row">
          <h2 className="text-white px-5 py-2">
            ISS Tracking Map
          </h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <ProjectionInfoContainer />
            <ChangeProjectionButtonsContainer />
          </div>
          <div className="col-12 col-md-9">
            <WorldMapContainer />
          </div>
        </div>
      </div>
    )
}

export default TrackingMap;