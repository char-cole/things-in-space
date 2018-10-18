import { connect } from "react-redux";
import FlyoverDisplay from "../components/FlyoverDisplay";

const mapStateToProps = (state) => ({
    flyover: state.flyover,
});

export default connect(mapStateToProps)(FlyoverDisplay);