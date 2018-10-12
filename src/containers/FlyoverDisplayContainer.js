import { connect } from "react-redux";
import FlyoverDisplay from "../components/FlyoverDisplay";

const mapStateToProps = (state) => ({
    flyover: state.flyover,
    currentLat: state.currentLat,
    currentLong: state.currentLong,
});

export default connect(mapStateToProps)(FlyoverDisplay);