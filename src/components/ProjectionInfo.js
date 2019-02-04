import React from "react"

const ProjectionInfo = (props) => {
    return (
        <div style={{margin:"10px"}}>
            <button
            className="btn btn-outline-light"
            data-toggle="collapse"
            data-target="#info-collapse">
                <h4 className="m-0">
                    {props.selectedProjection.name}
                    <i className="mx-2 fas fa-minus"></i>
                </h4>
            </button>
            <div class="collapse show" id="info-collapse">
                    <small className="text-white">
                        {props.selectedProjection.desc}
                    </small>
            </div>
        </div>
    )
}

export default ProjectionInfo;