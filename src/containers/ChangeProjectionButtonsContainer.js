import { connect } from "react-redux";
import ChangeProjectionButtons from "../components/ChangeProjectionButtons";
import { changeProjection } from "../actions";

const mapStateToProps = (state) => ({
    selectedProjection: state.selectedProjection,
    allProjections: state.allProjections
})

const mapDispatchToProps = (dispatch) => ({
    changeProjection: (projection) => {
        dispatch(changeProjection(projection))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProjectionButtons);