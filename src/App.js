import Nav from './pages/Nav';
import './App.css';
import React from 'react';
import Hero from './pages/Hero';
import About from './pages/About';

function App() {
  return (
    <div className="App">
    <Nav />
    <Hero />
    <About />
    </div>
  );
}

export default App;
