export function loadFlyover() {
    return function (dispatch) {
        const tempCityLat = "11.42146969";
        const tempCityLong = "16.34638023";
        fetch("http://api.open-notify.org/iss-pass.json?lat="+tempCityLat+"&lon="+tempCityLong+"&n=1")
        .then((response) => {return response.json()})
        .then((pass) => {
            const dateRaw = new Date(pass.response[0].risetime*1000);
            const durationRaw = pass.response[0].duration;
            console.log("raw duration:"+durationRaw+" seconds");
            const passDate = {
                date: dateRaw.toString(),
                duration: (durationRaw/60).toFixed(0)+" minutes, "+(durationRaw%60)+" seconds"
            };
            console.log(passDate);
        dispatch(flyoverLoaded(passDate));
      });
    };
}

function flyoverLoaded(passDate) {
    return {
        type: "FLYOVER_LOADED",
        value: passDate
    };
}
