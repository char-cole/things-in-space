import { feature } from "topojson-client"

export function loadFlyover(lat, long) {
    return function (dispatch) {
        fetch("http://api.open-notify.org/iss-pass.json?lat="+lat+"&lon="+long)
        .then((response) => {return response.json()})
        .then((pass) => {
            console.log(pass);
            const dateRaw = new Date(pass.response[0].risetime*1000);
            const endRaw = new Date((pass.response[0].risetime + pass.response[0].duration)*1000) 
            const dateObj = {
                hours: dateRaw.getHours(),
                minutes: dateRaw.getMinutes(),
                seconds: dateRaw.getSeconds(),
                day: dateRaw.getDate(),
                month: dateRaw.getMonth()+1
            };
            const endObj = {
                hours: endRaw.getHours(),
                minutes: endRaw.getMinutes(),
                seconds: endRaw.getSeconds(),
                day: endRaw.getDate(),
                month: endRaw.getMonth()+1
            };
            const passDate = {
                loaded: true,
                lat: lat,
                long: long,
                hr: dateObj.hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
                min: dateObj.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
                sec: dateObj.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
                day: dateObj.day,
                mon: dateObj.month,
                endHr: endObj.hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
                endMin: endObj.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
                endSec: endObj.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
                endDay: endObj.day,
                endMon: endObj.month,
            };
            console.log(passDate);
        dispatch(flyoverLoaded(passDate));
        })
        .catch(err => console.error('Caught error: ', err))
    };
}

function flyoverLoaded(passDate) {
    return {
        type: "FLYOVER_LOADED",
        value: passDate
    };
}

export function updateLat(co) {
    return {
        type: "LAT_UPDATED",
        value: co
    };
}

export function updateLong(co) {
    return {
        type: "LONG_UPDATED",
        value: co
    };
}

export function updateCoords(lat, long) {
    return {
        type: "COORDS_UPDATED",
        value: [lat,long]
    }
}

export function getMap() {
    return function (dispatch) {
        fetch("https://unpkg.com/world-atlas@1/world/110m.json")
        .then(response => {
          if (response.status !== 200) {
            console.log(`There was a problem: ${response.status}`)
            return
          }
          response.json()
          .then(worldData => {
              dispatch(mapLoaded(feature(worldData, worldData.objects.countries).features))
          })
        })
        .catch(err => console.error('Caught error: ', err))
    }
}

function mapLoaded(data) {
    return {
        type: "MAP_LOADED",
        value: data
    }
}

export function loadCurrent() {
    return function (dispatch) {
        fetch("http://api.open-notify.org/iss-now.json")
        .then(response => {
            if (response.status !== 200) {
                console.log(`There was a problem: ${response.status}`)
                return
            }
            response.json()
            .then(res => {
                let current = {
                    loaded: true,
                    longLat: [parseFloat(res.iss_position.longitude), parseFloat(res.iss_position.latitude)]
                };
                console.log(current.longLat);
                dispatch(currentLoaded(current))
            })
        })
        .catch(err => console.error('Caught error: ', err))
    }
}

function currentLoaded(coords) {
    return {
        type: "CURRENT_LOADED",
        value: coords
    }
}

export function changeProjection(projection) {
    console.log("action reads projection as: "+projection);
    return {
        type: 'PROJECTION_CHANGED',
        value: projection
    }
}