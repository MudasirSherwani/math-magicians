import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  );
}
