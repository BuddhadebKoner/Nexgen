import React from 'react'
import './styles/App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import AimContent from './Components/AimContent/AimContent';
import ScrollIndicator from './Components/ScrollIndicator/ScrollIndicator';
import Ourproducts from './Components/Ourproducts/Ourproducts';

// gsap imports
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OurService from './Components/OurService/OurService';
import Lenis from 'lenis';
import Footer from './Components/Footer/Footer';
import MoedernTech from './Components/MoedernTech/MoedernTech';

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
      duration: 0.5,
      ease: 'power2.out'
    });
  }


  return (

    <>
      <div
        onMouseMove={handleMouseFollow}
        className="Full_app_body">
        <div className="mouse_follow_box"></div>
        <ScrollIndicator />
        <div className="Navbar_and_Hero">
          <Navbar />
          <Hero />
        </div>
        <AimContent />
        <Ourproducts />
        <OurService />
        <MoedernTech />
        <Footer />
      </div>
    </>
  )

}

export default App
