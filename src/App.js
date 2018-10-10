import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FlyoverCalcContainer from './containers/FlyoverCalcContainer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class App extends Component {

  componentDidMount() {
    this.props.loadFlyover();
  }

  render() {
    return (
      <BrowserRouter>
        <div>       
          <Switch>
            <Route path="/" component={FlyoverCalcContainer} />
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
