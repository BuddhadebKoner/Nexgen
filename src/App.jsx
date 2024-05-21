import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Wellcomemess from './Components/Wellcomemess/Wellcomemess';
import AimContent from './Components/AimContent/AimContent';
import ScrollIndicator from './Components/ScrollIndicator/ScrollIndicator';


function App() {
  

  return (

    <>
      <ScrollIndicator />
    <div className="Navbar_and_Hero">
      <Navbar />
      <Hero />
    </div>
      <Wellcomemess />
      <AimContent />
    </>
  )

}

export default App
