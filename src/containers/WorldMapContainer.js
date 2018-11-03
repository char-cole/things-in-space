import { connect } from "react-redux";
import WorldMap from "../components/WorldMap";
import { getMap, loadCurrent, changeProjection } from "../actions";

const mapStateToProps = (state) => ({
    worldData: state.worldData,
    currentCoords: state.currentCoords,
    flyover: state.flyover,
    selectedProjection: state.selectedProjection
});

const mapDispatchToProps = (dispatch) => ({
    getMap: () => {
        dispatch(getMap())
    },
    getCoords: () => {
        dispatch(loadCurrent())
    },
    changeProjection: (projection) => {
        dispatch(changeProjection(projection))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);