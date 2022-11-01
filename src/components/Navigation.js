import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="container">
    <h1>Math Magicians</h1>
    <div className="navbar">
      <div className="navitem">
        <Link className="item" to="/">
          Home
        </Link>
        <span className="item">|</span>
        <Link className="item" to="/Calculator">
          Calculator
        </Link>
        <span className="item">|</span>
        <Link className="item" to="/Quote">
          Quote
        </Link>
      </div>
    </div>
  </div>
);

export default Navigation;
