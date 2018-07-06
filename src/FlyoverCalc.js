import React, { Component } from 'react';

class FlyoverCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPass: ""
    };
  };

  componentDidMount() {
    this.setState({
      nextPass: this.props.next
    })
  }

  render() {
      return (
        <div>
        <h1>{this.props.city} is at {this.props.lat}, {this.props.long}</h1>
        <h2>The ISS will be over {this.props.city} next at {this.state.nextPass}</h2>
        </div>
      );
    }
  }

export default FlyoverCalc;
