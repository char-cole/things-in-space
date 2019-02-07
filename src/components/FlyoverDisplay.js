import React, {Component} from 'react';

class FlyoverDisplay extends Component {
    render() {
        if (this.props.flyover.loaded) {
            return (
                <div className="text-white">
                    <p>
                        <i>
                            from
                        </i>
                        <span className="font-weight-bold large-text">
                            &nbsp;{this.props.flyover.hr}:{this.props.flyover.min}:{this.props.flyover.sec}&nbsp;
                        </span>
                        <i>
                            until
                        </i>
                        <span className="font-weight-bold large-text">
                            &nbsp;{this.props.flyover.endHr}:{this.props.flyover.endMin}:{this.props.flyover.endSec}&nbsp;
                        </span>
                        (Central Daylight Time)
                        <i>
                            &nbsp;on
                        </i>
                        <span className="font-weight-bold large-text">
                            &nbsp;{this.props.flyover.mon}/{this.props.flyover.day}
                        </span>
                        <br/>
                        <i>
                            Location:&nbsp;
                        </i>
                        <span className="font-weight-bold large-text">
                            &nbsp;{this.props.flyover.lat}, {this.props.flyover.long}
                        </span>
                    </p>
                </div>
            )
        } else return null;
    }
}

export default FlyoverDisplay;

