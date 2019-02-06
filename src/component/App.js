import React, { Component } from 'react';
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import execute from "../logic/execute";

import '../style/App.css';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
  }

  handleClick = buttonName => {
    this.setState(execute(this.state, buttonName));
  }

  render() {
    return (
      <div className="calc">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
