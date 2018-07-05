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
        <h2>The ISS will be over {this.props.city} next at {this.state.nextPass}</h2>
        </div>
      );
    }
  }

export default FlyoverCalc;
