import React from 'react';
import { Button } from 'reactstrap';

const LocationButtons = (props) => {

    let buttons = props.buttons;

    let buttonDivs = buttons.map( (item, index) => {
        return (
            <div className="grid-item" key={index}>
                <Button
                    className="locButton"
                    color="light"
                    onClick={()=> {return props.loadFlyover(item.lat,item.long)}}
                    >{item.name},<br/>{item.country}
                </Button>
            </div>
        )
    });

    return (
        <div className="buttonDiv grid-container">
            {buttonDivs}
        </div>
    )

}

export default LocationButtons