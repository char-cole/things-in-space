export default {
    current: {},
    worldData: [],
    selectedProjection: {
        "geo": "geoMercator",
        "name": "Mercator",
        "desc": "A common projection, created in 1569 by Gerardus Mercator. All lines of latitude and longitude are straight. This makes navigation easy, but makes land closer to the poles look much bigger than it is!"
    },
    allProjections: [
        {
            "geo": "geoMercator",
            "name": "Mercator",
            "desc": "A very common projection, created in 1569 by Gerardus Mercator. All lines of latitude and longitude are straight. This makes the map useful for navigation, but greatly distorts distance closer to the poles!"
        },
        {
            "geo": "geoNaturalEarth1",
            "name": "Natural Earth",
            "desc": "A projection design in 2012 by Tom Patterson. Directions and sizes are slightly distorted to create a map that is easy to look at and keeps sizes fairly accurate.",
        },
        {
            "geo": "geoHill",
            "name": "Hill Eucyclic",
            "desc": "A kidney-shaped projection made by Karl Hill in 1958. This projection is equal-area, meaning the size of each country is accurate, but shapes are distorted."
        },
        {
            "geo": "geoAzimuthalEqualArea",
            "name": "Azimuthal (Equal Area)",
            "desc": "Azimuthal projections keep accurate azimuth, meaning direction from the center of the projection. This projection is equal-area and is centered on the north pole. The south pole is the entire outer edge!"
        },
        {
            "geo": "geoOrthographic",
            "name": "Orthographic",
            "desc": "Orthographic projections can only show half of a sphere at once. Distance is distorted near the edges, making the Earth appear as it would from space. This map rotates to keep the ISS near the center so its location can always be easily seen."
        },
        {
            "geo": "geoConicEqualArea",
            "name": "Conic (Equal Area)",
            "desc": "Conic projections are made as if placing a cone over the Earth, then projecting an image of the Earth onto that cone, and then flattening it out. Here the cone is centered on the north pole, and land in the southern hemisphere is greatly stretched, because the entire outer edge is the south pole."
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
