import React from 'react'
import './Navbar.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Navbar() {

  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from('.navbar__hero', {
      y: -40,
      duration: 0.7,
      opacity: 0,
      delay: 0.5,
    })
    tl.from('.navbar__link', {
      y: -20,
      duration: 0.3,
      opacity: 0,
      delay: 0,
      stagger: 0.05,
    })
  })

  return (
    <>
      <nav className="navbar">
        <div className="navbar__hero">
          NEXGEN
        </div>
        <div className="navbar__links">
          <a href="#work" className="navbar__link">Work</a>
          <a href="#about" className="navbar__link">About</a>
          <a href="#contact" className="navbar__link">Contact</a>
          <a href="#blog" className="navbar__link">Blog</a>
        </div>
      </nav>
    </>
  )
}
