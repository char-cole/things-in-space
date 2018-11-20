import { connect } from "react-redux";
import ProjectionInfo from "../components/ProjectionInfo";

const mapStateToProps = (state) => ({
    selectedProjection: state.selectedProjection,
});

export default connect(mapStateToProps)(ProjectionInfo);