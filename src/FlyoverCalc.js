import React, { Component } from 'react';

class FlyoverCalc extends Component {
  constructor(props) {
    super(props);

  };

  render() {
      return (
        <div>
        <h1 className="display-4">({this.props.lat}, {this.props.long})</h1>
        <h2>{this.props.city}, {this.props.country}</h2>
        <p> Next ISS flyover: {this.props.next} (duration: {this.props.duration})</p>
        </div>
      );
    }
  }

export default FlyoverCalc;
