import React from "react"

const ProjectionInfo = (props) => {
    return (
        <div>
            <button
            className="btn btn-block btn-outline-light"
            data-toggle="collapse"
            data-target="#info-collapse">
                <h4 className="m-0">
                    {props.selectedProjection.name}
                    <i className="ml-4 fas fa-caret-down"></i>
                </h4>
            </button>
            <div class="collapse show" id="info-collapse">
                <small className="text-white px-3 py-2 collapse show">
                    {props.selectedProjection.desc}
                </small>
            </div>
        </div>
    )
}

export default ProjectionInfo;