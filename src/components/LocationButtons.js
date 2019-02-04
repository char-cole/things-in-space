import React from 'react';

const LocationButtons = (props) => {

    let buttons = props.buttons;

    let buttonDivs = buttons.map( (item, index) => {
        return (
            <div className="grid-item" key={index}>
                <button
                    className="locButton btn btn-secondary"
                    onClick={()=> {return props.loadFlyover(item.lat,item.long)}}
                    >{item.name},<br/>{item.country}
                </button>
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