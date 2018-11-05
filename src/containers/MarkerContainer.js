import { connect } from "react-redux";
import Marker from "../components/Marker";

const mapStateToProps = (state) => ({
    current: state.currentCoords,
    selectedProjection: state.selectedProjection
});

export default connect(mapStateToProps)(Marker);