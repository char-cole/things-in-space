import React from "react"

const ChangeProjectionButtons = (props) => {
    let buttonDivs = props.allProjections.map( (x, i) => {
        if (x.geo !== props.selectedProjection.geo) {
            return (
                    <button
                        className="btn btn-block btn-secondary my-1"
                        key={i}
                        onClick={ () => {
                        return props.changeProjection(x)} }
                    >
                        {x.name} Projection
                    </button>
            )
        }
        else return null;
    })
    return (
        <div>
            {buttonDivs}
        </div>
    )
}

export default ChangeProjectionButtons;