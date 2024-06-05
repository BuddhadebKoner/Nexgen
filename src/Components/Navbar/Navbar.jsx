import React from 'react'
import '../../styles/Navbar.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
// import FloatNav from '../FloatNav/FloatNav'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'
import { NavLink } from 'react-router-dom'

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
         {/* <FloatNav /> */}
         <ScrollIndicator />

         <nav className="navbar">
            <div className="navbar__hero">
               <NavLink to="">
                  NEXGEN
               </NavLink>
            </div>
            <div className="navbar__links">
               <NavLink to={"Service"} className="navbar__link">Service</NavLink>
               <NavLink to={"Product"} className="navbar__link">Product</NavLink>
               <NavLink to={"about"} className="navbar__link">About</NavLink>
               <NavLink to={"contact"} className="navbar__link">Contact</NavLink>
               <NavLink to={"Blog"} className="navbar__link">Blog</NavLink>
            </div>
         </nav>

      </>
   )
}
