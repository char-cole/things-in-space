import React, { Component } from "react"
import { geoConicEqualArea, geoMercator, geoPath, geoGraticule } from "d3-geo"
import { geoHill } from "d3-geo-projection"
import MarkerContainer from "../containers/MarkerContainer"
import ChangeProjectionButtonsContainer from "../containers/ChangeProjectionButtonsContainer"
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule
  } from "react-simple-maps"

  class WorldMap2 extends Component {

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
        this.props.getMap()
    }

    render() {
      return(
        <div>
            <ChangeProjectionButtonsContainer/>
            <ComposableMap projection={"times"}>
                <Graticule/>
                <Geographies geography={ this.props.worldData }>
                {(geographies, projection) => geographies.map((geography, i) => (
                    <Geography
                    key={ `geography-${ i }` }
                    geography={ geography }
                    projection={ projection }
                    style={{
                        default: {
                          fill: `rgba(38,250,56,${1 / this.props.worldData.length * i + .1})`,
                          stroke: "#FFFFFF",
                          strokeWidth: 0.5,
                          outline: "none",
                        },
                      }}
                    />
                ))}
                </Geographies>
          </ComposableMap>
        </div>
      )
    }
  }

  export default WorldMap2