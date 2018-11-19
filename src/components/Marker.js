import React, {Component} from 'react';
import { geoConicEqualArea, geoNaturalEarth1, geoMercator, geoConicEquidistant, geoAzimuthalEqualArea, geoOrthographic } from "d3-geo"
import { geoHill } from "d3-geo-projection"

class Marker extends Component {
    projection(projection) {
        let projObj = {
           "geoHill": () => {
                return geoHill()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ]);
           },
           "geoOrthographic": () => {
                return geoOrthographic()
                .scale(200)
                .translate([ 800 / 2, 450 / 2 ]);
            },
            "geoNaturalEarth1": () => {
                return geoNaturalEarth1()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ]);
            },
            "geoAzimuthalEqualArea": () => {
                return geoAzimuthalEqualArea()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ]);
            },
            "geoConicEqualArea": () => {
                return geoConicEqualArea()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ]);
            },
            "geoConicEqualArea": () => {
                return geoConicEqualArea()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ]);
            },
            "geoConicEquidistant": () => {
                return geoConicEquidistant()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ]);
            },
            "geoMercator": () => {
                return geoMercator()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ]);
            },
        }
        return projObj[projection]()
    }
    render() {
        if(this.props.current.loaded){
                return (
                    <circle
                    cx={ this.projection(this.props.selectedProjection[0])(this.props.current.longLat)[0] }
                    cy={ this.projection(this.props.selectedProjection[0])(this.props.current.longLat)[1] }
                    r={ 7 }
                    fill="#E91E63"
                    className="marker"
                    />
                )
        } else return null
    }
}

export default Marker;