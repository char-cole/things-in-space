import {combineReducers} from "redux";

function flyover(state = {}, action) {
  if (action.type === "FLYOVER_LOADED") {
    return action.value;
  }
  return state;
}

function inputLat(state = "", action) {
    if (action.type === "LAT_UPDATED") {
        return action.value;
    }
    return state;
}

function inputLong(state = "", action) {
    if (action.type === "LONG_UPDATED") {
        return action.value;
    }
    return state;
}

function buttons(state=[], action) {
    if (action.type === "BUTTONS_LOADED") {
        return action.value;
    }
    return state;
}

function worldData(state=[], action) {
    if (action.type === "MAP_LOADED") {
        return action.value;
    }
    return state;
}

function current(state={}, action) {
    if (action.type === "CURRENT_LOADED") {
        return action.value;
    }
    return state;
}

function selectedProjection(state=["geoMercator", "Mercator"], action) {
    if (action.type === "PROJECTION_CHANGED") {
        return action.value;
    }
    return state;
}

function allProjections(state=[], action) {
    return state;
}

function cities(state=[], action) {
    return state;
}

const rootReducer = combineReducers({
    flyover, inputLat, inputLong, buttons, worldData, current, selectedProjection, allProjections, cities
});

export default rootReducer;