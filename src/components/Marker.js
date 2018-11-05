import React, {Component} from 'react';
import { geoConicEqualArea } from "d3-geo"
import { geoHill } from "d3-geo-projection"

class Marker extends Component {
    projectionConic() {
        return geoConicEqualArea()
          .scale(100)
          .translate([ 800 / 2, 450 / 2 ])
     }
     projectionHill() {
        return geoHill()
          .scale(100)
          .translate([ 800 / 2, 450 / 2 ])
    }
    render() {
        if(this.props.current.loaded){
            if (this.props.selectedProjection === "geoHill"){
                return (
                <circle
                cx={ this.projectionHill()(this.props.current.longLat)[0] }
                cy={ this.projectionHill()(this.props.current.longLat)[1] }
                r={ 7 }
                fill="#E91E63"
                className="marker"
                />
                )
            } else {
                return (
                    <circle
                    cx={ this.projectionConic()(this.props.current.longLat)[0] }
                    cy={ this.projectionConic()(this.props.current.longLat)[1] }
                    r={ 7 }
                    fill="#E91E63"
                    className="marker"
                    />
                    )
            }
        } else return null
    }
}

export default Marker;