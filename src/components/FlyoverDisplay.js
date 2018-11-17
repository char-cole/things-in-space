import React, {Component} from 'react';

let styleBig = {
    fontSize:"1.5em",
    fontWeight:"bold"
}

class FlyoverDisplay extends Component {
    render() {
        if (this.props.flyover.loaded) {
            return (
                <div className="grid-item wide">
                    <p>
                        <i>At</i><span style={styleBig}> {this.props.flyover.lat}, {this.props.flyover.long}</span><br/>
                        The ISS will be overhead next from<br/>
                        <span style={styleBig}>{this.props.flyover.hr}:{this.props.flyover.min}:{this.props.flyover.sec} </span><i>until</i><span style={styleBig}> {this.props.flyover.endHr}:{this.props.flyover.endMin}:{this.props.flyover.endSec} </span>(Central Daylight Time)<br/>
                        <i>on</i><span style={styleBig}> {this.props.flyover.mon}/{this.props.flyover.day}</span>
                    </p>
                </div>
            )
        } else return null;
    }
}

export default FlyoverDisplay;

