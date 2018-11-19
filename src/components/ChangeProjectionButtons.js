import React from "react"
import { Button } from 'reactstrap';

const ChangeProjectionButtons = (props) => {
    let buttonDivs = props.allProjections.map( (x, i) => {
        if (x[0] != props.selectedProjection[0]) {
            return (
                <div key={i}>
                    <Button
                        className="projectionButtons"
                        color="secondary"
                        onClick={ () => {
                        return props.changeProjection(x)} }
                    >
                        Change to {x[1]}
                    </Button>
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