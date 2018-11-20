import React from "react"

const ProjectionInfo = (props) => {
    return (
        <div style={{margin:"10px"}}>
            <h4>{props.selectedProjection.name}</h4>
            <p className="smallText">{props.selectedProjection.desc}</p>
        </div>
    )
}

export default ProjectionInfo;