import React from "react"
import { Button } from 'reactstrap';

const UpdatePositionButton = (props) => {
    return (
        <div>
            {
                <Button
                    color="primary"
                    // className="btn-block"
                    onClick={ () => {return props.loadCurrent()} }
                >
                    Update Position
                </Button>
            }
        </div>
    )
}

export default UpdatePositionButton