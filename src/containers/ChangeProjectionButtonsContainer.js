import { connect } from "react-redux";
import ChangeProjectionButtons from "../components/ChangeProjectionButtons";
import { changeProjection, loadCurrent } from "../actions";

const mapStateToProps = (state) => ({
    selectedProjection: state.selectedProjection,
    allProjections: state.allProjections
})

const mapDispatchToProps = (dispatch) => ({
    changeProjection: (projection) => {
        dispatch(changeProjection(projection))
    },
    loadCurrent: (projection) => {
        dispatch(loadCurrent(projection))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProjectionButtons);