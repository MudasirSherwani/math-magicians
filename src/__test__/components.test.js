import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Quote from '../components/Quote';
import Calculator from '../components/Calculator';

describe('Navigation renders correctly', () => {
  test('Renders Navigation Correctly', () => {
    const navigation = render(
      <Router>
        <Navigation />
      </Router>,
    );
    expect(navigation).toMatchSnapshot();
  });
});

describe('Home renders correctly', () => {
  test('Renders Header Correctly', () => {
    const home = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(home).toMatchSnapshot();
  });
});

describe('Quote renders correctly', () => {
  test('Renders Header Correctly', () => {
    const quote = render(
      <Router>
        <Quote />
      </Router>,
    );
    expect(quote).toMatchSnapshot();
  });
});

describe('Calculator renders correctly', () => {
  test('Renders Calculator Correctly', () => {
    const calc = render(
      <Router>
        <Calculator />
      </Router>,
    );
    expect(calc).toMatchSnapshot();
  });
});
