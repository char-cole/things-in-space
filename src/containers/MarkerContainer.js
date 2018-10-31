import { connect } from "react-redux";
import Marker from "../components/Marker";

const mapStateToProps = (state) => ({
    current: state.currentCoords,
    projection: state.selectedProjection
});

export default connect(mapStateToProps)(Marker);