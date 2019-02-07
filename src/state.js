export default {
    current: {},
    worldData: [],
    selectedProjection: {
        "geo": "geoMercator",
        "name": "Mercator",
        "desc": "One of the most common projections for general use, created in 1569 by Gerardus Mercator. All lines of latitude and longitude are straight. This makes navigation easy, but makes land closer to the poles look much larger than it really is. Notice the size of Greenland compared to the entire continent of Africa!"
    },
    allProjections: [
        {
            "geo": "geoMercator",
            "name": "Mercator",
            "desc": "One of the most common projections for general use, created in 1569 by Gerardus Mercator. All lines of latitude and longitude are straight. This makes navigation easy, but makes land closer to the poles look much larger than it really is. Notice the size of Greenland compared to the entire continent of Africa!"
        },
        {
            "geo": "geoNaturalEarth1",
            "name": "Natural Earth",
            "desc": "A projection design in 2012 by Tom Patterson. Directions and sizes are slightly distorted to create a map that is easy to look at and keeps sizes fairly accurate.",
        },
        {
            "geo": "geoHill",
            "name": "Hill Eucyclic",
            "desc": "A kidney-shaped projection made by Karl Hill in 1958. This projection is equal-area, meaning the size of each country is accurate, but shapes are distorted. Notice how small Greenland actually is compared to Africa!"
        },
        {
            "geo": "geoAzimuthalEqualArea",
            "name": "Azimuthal",
            "desc": "Azimuthal projections keep accurate azimuth, meaning direction from the center of the projection. In this projection, the center is the north pole. The south pole is drsatically stretched out around the entire outer edge!"
        },
        {
            "geo": "geoOrthographic",
            "name": "Orthographic",
            "desc": "Orthographic projections greatly distort distance as one moves away from the center point, completely cutting off the projection 180 degrees from the center in all directions. The result appears just as the Earth would if the viewer were in space directly over the center of the projection (in this app, a point on the equator), but can't display the entire Earth at once. This app rotates the projection to ensure the location of the ISS is always displayed near the center."
        },
        {
            "geo": "geoConicEqualArea",
            "name": "Conic",
            "desc": "Conic projections are shaped like a cone unrolled and laid out flat. Conic proejctions centered on the north pole, as this one is, can be very useful for countries or regions in middle latitudes in the northern hemisphere. However, distance is more distorted near the equator, and in the opposite hemisphere (southern in this app) the projection becomes very difficult to use."
        },
    ],
    flyover: {},
    inputLat: "",
    inputLong: "",
    buttons: [
        {
            name: "São Paulo",
            lat: -23.55,
            long: -46.633333,
            country: "Brazil"
        },
        {
            name: "Lagos",
            lat: 6.455027,
            long: 3.384082,
            country: "Nigeria"
        },
        {
            name: "Dhaka",
            lat: 23.7,
            long: 90.366667,
            country: "Bangladesh"
        },
        {
            name: "Beijing",
            lat: 39.916667,
            long: 116.383333,
            country: "China"
        },
        {
            name: "New York",
            lat: 40.7127,
            long: -74.0059,
            country: "USA"
        },
        {
            name: "Moscow",
            lat: 55.75,
            long: 37.616667,
            country: "Russia"
        },
    ]
}
