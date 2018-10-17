import {combineReducers} from "redux";

function flyover(state = {}, action) {
  if (action.type === "FLYOVER_LOADED") {
    return action.value;
  }
  return state;
}

function currentLat(state = "", action) {
    if (action.type === "LAT_UPDATED") {
        return action.value;
    }
    return state;
}

function currentLong(state = "", action) {
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

const rootReducer = combineReducers({
    flyover, currentLat, currentLong, buttons, worldData
});

export default rootReducer;