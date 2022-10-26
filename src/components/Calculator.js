import React, { Component } from 'react';
import calculate from '../logic/calculate';
import KeyButtons from './keys';
import './Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  EventHandler = (element) => {
    const btnValue = element.keyTag;
    const getCalcu = calculate(this.state, btnValue);
    this.setState(getCalcu);
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          <div className="display-value">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <div className="inputs">
          <KeyButtons onClickOperation={this.EventHandler} />
        </div>
      </div>
    );
  }
}
