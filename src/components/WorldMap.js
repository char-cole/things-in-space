import React, { Component } from "react"
import { geoConicEqualArea, geoMercator, geoPath, geoGraticule } from "d3-geo"
import { geoHill } from "d3-geo-projection"
import MarkerContainer from "../containers/MarkerContainer"

class WorldMap extends Component {

    graticule(projection) {
        geoPath().projection(projection)(geoGraticule().step([10,10])())
    }

    projection() {
        if (this.props.selectedProjection === "geoHill") {
            return geoHill()
            .scale(100)
            .translate([ 800 / 2, 450 / 2 ])
        }
        if (this.props.selectedProjection === "geoConicEqualArea") {
            return geoConicEqualArea()
            .scale(100)
            .translate([ 800 / 2, 450 / 2 ])
        }
        if (this.props.selectedProjection === "geoMercator") {
            return geoMercator()
            .scale(100)
            .translate([ 800 / 2, 450 / 2 ])
        }
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
                            d={ geoPath().projection(this.projection())(d) }
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