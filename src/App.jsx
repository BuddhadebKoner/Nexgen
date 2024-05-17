import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  
  // ScrollSmoother.create({
  //   smooth: 1, 
  //   effects: true, 
  //   smoothTouch: 0.1,
  // });

  return (

    <>
      <Navbar />
      <Hero />
    </>
  )

}

export default App
