import { connect } from "react-redux";
import WorldMap from "../components/WorldMap";
import { getMap, loadCurrent } from "../actions";

const mapStateToProps = (state) => ({
    worldData: state.worldData,
    currentCoords: state.currentCoords,
    flyover: state.flyover,
    projection: state.selectedProjection
});

const mapDispatchToProps = (dispatch) => ({
    getMap: () => {
        dispatch(getMap())
    },
    getCoords: () => {
        dispatch(loadCurrent())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);