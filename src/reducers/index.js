import {combineReducers} from "redux";

function flyover(state = {}, action) {
  if (action.type === "FLYOVER_LOADED") {
    console.log(action.value);
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
    flyover,
});

export default rootReducer;