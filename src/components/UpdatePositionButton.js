import React from "react"

const UpdatePositionButton = (props) => {
    return (
        <div>
            {
                <button
                    className="btn btn-primary"
                    onClick={ () => {return props.loadCurrent()} }
                >
                    Update Position
                </button>
            }
        </div>
    )
}

export default UpdatePositionButton