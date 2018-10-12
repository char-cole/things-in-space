import { connect } from "react-redux";
import LocationButtons from "../components/LocationButtons";
import { loadFlyover, } from "../actions";

const mapStateToProps = (state) => ({
    flyover: state.flyover,
    buttons: state.buttons
});

const mapDispatchToProps = (dispatch) => ({
    loadFlyover: (lat, long) => {
        dispatch(loadFlyover(lat, long))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationButtons);