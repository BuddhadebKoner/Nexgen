import React from 'react';
import './styles/App.css';

// gsap imports
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

// pages


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

function App() {

  // for smooth scrolling
  const lenis = new Lenis()


  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  //  for mouse follow effect

  function handleMouseFollow(e) {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - container.left - window.scrollX;
    const y = e.pageY - container.top - window.scrollY;

    gsap.to('.mouse_follow_box', {
      x: x,
      y: y,
      duration: 0.8,
      ease: 'power2.out'
    });
  }


  return (

    <>
      <div className="mouse_follow_box"></div>
      <div
        onMouseMove={handleMouseFollow}
        className="Full_app_body">
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    </>

  )

}

export default App
