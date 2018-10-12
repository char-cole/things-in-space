import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadFlyover, } from "./actions";


function mapDispatchToProps(dispatch) {
  return {
    loadFlyover: function () {
      dispatch(loadFlyover());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
