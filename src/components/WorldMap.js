import React, { Component } from "react"
import {
    geoConicEqualArea,
    geoConicEquidistant,
    geoMercator,
    geoNaturalEarth1,
    geoAzimuthalEqualArea, 
    geoOrthographic,
    geoPath, 
    geoGraticule } from "d3-geo"
import { geoHill } from "d3-geo-projection"
import MarkerContainer from "../containers/MarkerContainer"

class WorldMap extends Component {

    graticule(projection) {
        geoPath().projection(projection)(geoGraticule().step([10,10])())
    }

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
                            d={ geoPath().projection(this.projection(this.props.selectedProjection[0]))(d) }
                            className="country"
                            fill={ `rgba(38,250,56,${1 / this.props.worldData.length * i + .1})` }
                            stroke="#FFFFFF"
                            strokeWidth={ 0.5 }
                        />
                        ))
                    }
                    </g>

                    <g className="markers">
                    <MarkerContainer />
                    </g>

                </svg>

            </div>
        )
    }
}

export default WorldMap;