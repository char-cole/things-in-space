import React from "react"
import { Button } from 'reactstrap';

const ChangeProjectionButtons = (props) => {
    let buttonDivs = props.allProjections.map( (x, i) => {
        if (x.geo != props.selectedProjection.geo) {
            return (
                <div key={i}>
                    <Button
                        className="projectionButtons"
                        color="secondary"
                        onClick={ () => {
                        return props.changeProjection(x)} }
                    >
                        Change to {x.name}
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