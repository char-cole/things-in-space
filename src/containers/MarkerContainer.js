import { connect } from "react-redux";
import Marker from "../components/Marker";

const mapStateToProps = (state) => ({
    current: state.current,
    selectedProjection: state.selectedProjection
});

export default connect(mapStateToProps)(Marker);