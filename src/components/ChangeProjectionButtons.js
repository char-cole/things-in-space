import React from "react"
import { Button } from 'reactstrap';

const ChangeProjectionButtons = (props) => {
    let buttonDivs = props.allProjections.map( (x, i) => {
        if (x != props.selectedProjection) {
            let cortado = x.split('geo')[1];
            return (
                <div key={i}>
                    <Button
                        color="secondary"
                        onClick={ () => {
                        return props.changeProjection(x)} }
                    >
                        Change to {cortado}
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