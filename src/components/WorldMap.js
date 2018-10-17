import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"

class WorldMap extends Component {
  projection() {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }
  componentDidMount() {
    this.props.getMap()
  }
  render() {
    return (
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
          <circle
            cx={ this.projection()([8,48])[0] }
            cy={ this.projection()([8,48])[1] }
            r={ 10 }
            fill="#E91E63"
            className="marker"
          />
        </g>
      </svg>
    )
  }
}

export default WorldMap;