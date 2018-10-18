import { connect } from "react-redux";
import Marker from "../components/Marker";

const mapStateToProps = (state) => ({
    current: state.currentCoords,
});

export default connect(mapStateToProps)(Marker);