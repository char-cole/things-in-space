import React, {Component} from 'react';
import { geoMercator, geoPath } from "d3-geo"

class Marker extends Component {
    projection() {
        return geoMercator()
          .scale(100)
          .translate([ 800 / 2, 450 / 2 ])
      }
    render() {
        if(this.props.current.loaded){
            console.log(this.props.current.longLat);
            return (
            <circle
            cx={ this.projection()(this.props.current.longLat)[0] }
            cy={ this.projection()(this.props.current.longLat)[1] }
            r={ 7 }
            fill="#E91E63"
            className="marker"
            />
            )
        } else return null
    }
}

export default Marker;