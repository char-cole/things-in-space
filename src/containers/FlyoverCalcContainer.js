import { connect } from "react-redux";
import FlyoverCalc from "../components/FlyoverCalc";
import { loadFlyover } from "../actions/index";

const mapStateToProps = (state) => ({flyover: state.flyover});

const mapDispatchToProps = (dispatch) => ({
    loadFlyover: () => {dispatch(loadFlyover())}
});

export default connect(mapStateToProps, mapDispatchToProps)(FlyoverCalc);