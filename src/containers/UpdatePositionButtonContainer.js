import { connect } from "react-redux";
import UpdatePositionButton from "../components/UpdatePositionButton";
import { loadCurrent } from "../actions";

const mapDispatchToProps = (dispatch) => ({
    loadCurrent: (projection) => {
        dispatch(loadCurrent(projection))
    }
})

export default connect(null, mapDispatchToProps)(UpdatePositionButton);