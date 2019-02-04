import React from "react"

const ChangeProjectionButtons = (props) => {
    let buttonDivs = props.allProjections.map( (x, i) => {
        if (x.geo !== props.selectedProjection.geo) {
            return (
                <div key={i}>
                    <button
                        className="btn btn-secondary"
                        onClick={ () => {
                        return props.changeProjection(x)} }
                    >
                        {x.name} Projection
                    </button>
                </div>
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