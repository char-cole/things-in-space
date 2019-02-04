import React from 'react';
import {
    geoConicEqualArea,
    geoNaturalEarth1,
    geoMercator,
    geoAzimuthalEqualArea,
    geoOrthographic
} from "d3-geo"
import { geoHill } from "d3-geo-projection"


const CityMarker = (props) => {

    let currentLongLat;

    if (props.current.loaded) {
        currentLongLat = props.current.longLat;
    } else currentLongLat = [0,0]

    let projection = (projection) => {

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
                .rotate( rotation(currentLongLat) );
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

        return projObj[projection]();

    }

    let cityDivs = props.cities.map( (city, i) => {

        let longLat = [city.long,city.lat];

        let drawCity = () => {
            return (
                <circle
                    key={ i }
                    cx={ projection(props.selectedProjection.geo)(longLat)[0] }
                    cy={ projection(props.selectedProjection.geo)(longLat)[1] }
                    r={ 5 }
                    fill="white"
                    className="marker"
                />
            )
        }

        if (props.selectedProjection.geo !== "geoOrthographic") {
            return drawCity();
        }

        if (props.current.loaded) {

            if (props.current.longLat[0] >= 45 && props.current.longLat[0] < 135) {
                if (city.long >= 45 && city.long < 135) {
                    return drawCity();
                } else return null
            }

            if (props.current.longLat[0] >= 135) {
                if (city.long >= 135) {
                    return drawCity();
                } else return null
            }

            if (props.current.longLat[0] < -45) {
                if (city.long < -45) {
                   return drawCity();
                } else return null
            }

            else {
                if (city.long >= -45 && city.long < 45) {
                    return drawCity();
                } else return null
            }

        } else {
            if (city.long >= -45 && city.long < 45) {
                return drawCity();
            } else return null
        }
    })

    return cityDivs
}

export default CityMarker;