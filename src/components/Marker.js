import React, {Component} from 'react';
import { geoConicEqualArea, geoNaturalEarth1, geoMercator, geoAzimuthalEqualArea, geoOrthographic } from "d3-geo"
import { geoHill } from "d3-geo-projection"

class Marker extends Component {
    projection(projection) {
        let rotation = (r) => {
            if (r[0]) {
                if (r[0] < -45) return [90,0]
                if (r[0] > 45 && r[0] < 135) return [-90,0]
                if (r[0] >= 135) return [-180,0]
                else return [0,0]
            } else return [0,0]
        }
        let projObj = {
           "geoHill": () => {
                return geoHill()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ]);
           },
           "geoOrthographic": () => {
                return geoOrthographic()
                .scale(200)
                .translate([ 800 / 2, 450 / 2 ])
                .rotate( rotation(this.props.current.longLat) || [0,0] );
            },
            "geoNaturalEarth1": () => {
                return geoNaturalEarth1()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ]);
            },
            "geoAzimuthalEqualArea": () => {
                return geoAzimuthalEqualArea()
                .scale(100)
                .translate([ 800 / 2, 450 / 2 ])
                .rotate([0,-90]);
            },
            "geoConicEqualArea": () => {
                return geoConicEqualArea()
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
                    cx={ this.projection(this.props.selectedProjection.geo)(this.props.current.longLat)[0] }
                    cy={ this.projection(this.props.selectedProjection.geo)(this.props.current.longLat)[1] }
                    r={ 5 }
                    fill="#E91E63"
                    className="marker"
                    />
                )
        } else return null
    }
}

export default Marker;