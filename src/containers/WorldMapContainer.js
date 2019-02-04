import { connect } from "react-redux";
import WorldMap from "../components/WorldMap";
import { getMap, loadCurrent } from "../actions";

const mapStateToProps = (state) => ({
    worldData: state.worldData,
    selectedProjection: state.selectedProjection,
    current: state.current
});

const mapDispatchToProps = (dispatch) => ({
    getMap: () => {
        dispatch(getMap())
    },
    loadCurrent: () => {
        dispatch(loadCurrent())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);