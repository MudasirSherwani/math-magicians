import React, { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">
          <input className="display-value" type="text" placeholder="0" />
        </div>
        <div className="inputs">
          <button type="submit" className="input-btn" value="number">AC </button>
          <button type="submit" className="input-btn" value="number">+/- </button>
          <button type="submit" className="input-btn" value="number">% </button>
          <button type="submit" className="input-btn btn-org" value="number">÷ </button>
          <button type="submit" className="input-btn" value="number">7 </button>
          <button type="submit" className="input-btn" value="number">8 </button>
          <button type="submit" className="input-btn" value="number">9 </button>
          <button type="submit" className="input-btn btn-org" value="number">x </button>
          <button type="submit" className="input-btn" value="number">4 </button>
          <button type="submit" className="input-btn" value="number">5 </button>
          <button type="submit" className="input-btn" value="number">6 </button>
          <button type="submit" className="input-btn btn-org" value="number">- </button>
          <button type="submit" className="input-btn" value="number">1 </button>
          <button type="submit" className="input-btn" value="number">2 </button>
          <button type="submit" className="input-btn" value="number">3 </button>
          <button type="submit" className="input-btn btn-org" value="number">+ </button>
          <button type="submit" className="input-btn btn-zero" value="number">0 </button>
          <button type="submit" className="input-btn" value="number">. </button>
          <button type="submit" className="input-btn btn-org" value="number">= </button>
        </div>
      </div>
    );
  }
}
