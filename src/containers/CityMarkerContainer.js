import { connect } from "react-redux";
import CityMarkers from "../components/CityMarkers";

const mapStateToProps = (state) => ({
    cities: state.buttons,
    selectedProjection: state.selectedProjection,
    current: state.current,
});

export default connect(mapStateToProps)(CityMarkers);