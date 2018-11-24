import React, { Component } from "react"
import {
    geoConicEqualArea,
    geoMercator,
    geoNaturalEarth1,
    geoAzimuthalEqualArea, 
    geoOrthographic,
    geoPath, 
    geoGraticule } from "d3-geo"
import { geoHill } from "d3-geo-projection"
import MarkerContainer from "../containers/MarkerContainer"
import CityMarkerContainer from "../containers/CityMarkerContainer";

class WorldMap extends Component {

    graticule(projection) {
        geoPath().projection(projection)(geoGraticule().step([10,10])())
    }

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
                .rotate(rotation(this.props.current.longLat || [0,0]));
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

    componentDidMount() {
        this.props.getMap();
    }
    
    render() {

        return (
            <div>

                {/* SVG object to render countries, graticule (missing), and markers */}

                <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">

                    {/* <g className="graticule">
                        <path
                            d={ this.graticule(this.projection) }
                            stroke="#efefef"
                            strokeWidth={0.3}
                        />
                    </g> */}

                    <g className="countries">
                    {
                        this.props.worldData.map((d,i) => (
                        <path
                            key={ `path-${ i }` }
                            d={ geoPath().projection(this.projection(this.props.selectedProjection.geo))(d) }
                            className="country"
                            fill={ `rgba(38,250,56,${1 / this.props.worldData.length * i + .1})` }
                            stroke="#FFFFFF"
                            strokeWidth={ 0.5 }
                        />
                        ))
                    }
                    </g>

                    <g className="markers">
                    <CityMarkerContainer />
                    <MarkerContainer />
                    </g>

                </svg>

            </div>
        )
    }
}

export default WorldMap;