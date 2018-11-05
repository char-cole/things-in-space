import React, { Component } from "react"
import { geoConicEqualArea, geoPath } from "d3-geo"
import { geoHill } from "d3-geo-projection"
import MarkerContainer from "../containers/MarkerContainer"
import { Button } from 'reactstrap';

class WorldMap extends Component {
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
    componentDidMount() {
        this.props.getMap();
    }
    render() {
        if (this.props.selectedProjection === "geoHill") {
            console.log("hill proj: "+this.props.selectedProjection);
            return (
            <div>
                <Button
                    color="light"
                    onClick={ () => {
                        return this.props.changeProjection("geoConicEqualArea")} }
                >
                    Change to Conic Projection
                </Button>
                <Button
                    color="light"
                    onClick={ () => {return this.props.getCoords()} }
                >
                    Update Position
                </Button>
                <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
                    <g className="countries">
                    {
                        this.props.worldData.map((d,i) => (
                        <path
                            key={ `path-${ i }` }
                            d={ geoPath().projection(this.projectionHill())(d) }
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
        } else {
            console.log("cone proj: "+this.props.selectedProjection);
            return (
                <div>
                    <Button
                        color="light"
                        onClick={ () => {return this.props.changeProjection("geoHill")} }
                    >
                        Change to Hill Projection
                    </Button>
                    <Button
                        color="light"
                        onClick={ () => {return this.props.getCoords()} }
                    >
                        Update Position
                    </Button>
                    <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
                        <g className="countries">
                        {
                            this.props.worldData.map((d,i) => (
                            <path
                                key={ `path-${ i }` }
                                d={ geoPath().projection(this.projectionConic())(d) }
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
}

export default WorldMap;