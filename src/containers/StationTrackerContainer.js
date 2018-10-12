import { connect } from "react-redux";
import StationTracker from "../components/StationTracker";
import { loadFlyover, updateLat, updateLong } from "../actions";

const mapStateToProps = (state) => ({
    flyover: state.flyover,
    currentLat: state.currentLat,
    currentLong: state.currentLong,
});

const mapDispatchToProps = (dispatch) => ({
    loadFlyover: (lat, long) => {
        dispatch(loadFlyover(lat, long))
    },
    updateLat: (lat) => {
        dispatch(updateLat(lat))
    },
    updateLong: (long) => {
        dispatch(updateLong(long))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(StationTracker);