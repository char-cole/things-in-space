export function loadFlyover(lat, long) {
    return function (dispatch) {
        fetch("http://api.open-notify.org/iss-pass.json?lat="+lat+"&lon="+long)
        .then((response) => {return response.json()})
        .then((pass) => {
            console.log(pass);
            const dateRaw = new Date(pass.response[0].risetime*1000);
            const endDate = new Date((pass.response[0].risetime + pass.response[0].duration)*1000) 
            const dateObj = {
                hours: dateRaw.getHours(),
                minutes: dateRaw.getMinutes(),
                seconds: dateRaw.getSeconds(),
                day: dateRaw.getDate(),
                month: dateRaw.getMonth()+1
            };
            const endObj = {
                hours: endDate.getHours(),
                minutes: endDate.getMinutes(),
                seconds: endDate.getSeconds(),
                day: endDate.getDate(),
                month: endDate.getMonth()+1
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
      });
    };
}

// duration: (durationRaw/60).toFixed(0)+" minutes, "+(durationRaw%60)+" seconds"


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
