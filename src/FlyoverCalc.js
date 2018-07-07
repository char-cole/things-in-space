import React, { Component } from 'react';

class FlyoverCalc extends Component {
  constructor(props) {
    super(props);

  };
  
  render() {
      return (
        <div>
        <h1>{this.props.city}, {this.props.country} is at {this.props.lat}, {this.props.long}</h1>
        <h2>The ISS will be over {this.props.city} next at {this.props.next}</h2>
        <h3>The flyover will last {this.props.duration} minutes</h3>
        </div>
      );
    }
  }

export default FlyoverCalc;
