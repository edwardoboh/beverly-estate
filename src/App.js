import Nav from './pages/Nav';
import './App.css';
import React from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import How from './pages/How';
import HowtoData from './HowtoData';
import Steps from './infoSection';

function App() {
const stepsElements = HowtoData.map(info =>{
  return(
    <Steps key={info.id}
    {...info} />
  )
});


  return (
    <div className="App">
    <Nav />
    <Hero />
    <About />
    <How   />
    <div className='step-elements'>
    {stepsElements}
    </div>

    </div>
  );
}

export default App;
