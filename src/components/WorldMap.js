import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import MarkerContainer from "../containers/MarkerContainer"
import { Button } from 'reactstrap';

class WorldMap extends Component {
  projection() {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }
  componentDidMount() {
    this.props.getMap();
  }
  render() {
        return (
            <div>
                <Button
                    color="light"
                    onClick={()=>{return this.props.getCoords()}}
                >Update Position
                </Button>
                <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
                <g className="countries">
                {
                    this.props.worldData.map((d,i) => (
                    <path
                        key={ `path-${ i }` }
                        d={ geoPath().projection(this.projection())(d) }
                        className="country"
                        fill={ `rgba(38,50,56,${1 / this.props.worldData.length * i})` }
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