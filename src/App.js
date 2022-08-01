import React from 'react';
import './App.css';

import Nav from './pages/Nav';
import Hero from './pages/Hero';
import About from './pages/About';
import How from './pages/How';
import Review from './pages/Reviews';
import Testimonial from './pages/Testimonial';
import Footer from './pages/Footer';
import Houses from './pages/Houses';
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
      
      <Houses  />
      <Testimonial />
      <div className='testimonial-elements'>
      <Review />
      <Footer />
   </div>
 
    </div>
  );
}

export default App;
