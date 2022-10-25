import React, { Component } from 'react';
import calculate from '../logic/calculate';
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
    const btnValue = element.target.textContent;
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
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">AC</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">+/-</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">%</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn btn-org" value="number">÷</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">7</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">8</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">9</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn btn-org" value="number">x</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">4</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">5</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">6</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn btn-org" value="number">-</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">1</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">2</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">3</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn btn-org" value="number">+</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn btn-zero" value="number">0</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn" value="number">.</button>
          <button type="submit" onClick={this.EventHandler} className="input-btn btn-org" value="number">=</button>
        </div>
      </div>
    );
  }
}
