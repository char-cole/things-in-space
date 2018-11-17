import { connect } from "react-redux";
import WorldMap from "../components/WorldMap";
import { getMap } from "../actions";

const mapStateToProps = (state) => ({
    worldData: state.worldData,
    selectedProjection: state.selectedProjection
});

const mapDispatchToProps = (dispatch) => ({
    getMap: () => {
        dispatch(getMap())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);