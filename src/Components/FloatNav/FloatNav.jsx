import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../../styles/FloatNav.css'
import { NavLink } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export default function FloatNav() {

    useGSAP(() => {
        gsap.from('.FloatNav__link', {
            scrollTrigger: {
                trigger: '.FloatNav__links',
                scroller: 'body',
                start: 'top -20%',
                end: 'top -100%',
                scrub: 1,
            },
            y: 50,
            x: 250,
            opacity: 0,
            visibility: 'visible',
            stagger: 0.1
        });
        gsap.from('.FloatNav__links', {
            scrollTrigger: {
                trigger: '.FloatNav__links',
                scroller: 'body',
                start: 'top -40%',
                end: 'top -100%',
                scrub: 1,
            },
            opacity: 0,
            visibility: 'visible',
            
        })
    });

    return (
        <>
            <div
                className="FloatNav__links">
                {/* <div className="floatNav_overlay"></div> */}
                    <NavLink to={"Service"} className="FloatNav__link">Service</NavLink>
                    <NavLink to={"Product"} className="FloatNav__link">Product</NavLink>
                    <NavLink to={"about"} className="FloatNav__link">About</NavLink>
                    <NavLink to={"contact"} className="FloatNav__link">Contact</NavLink>
                    <NavLink to={"Blog"} className="FloatNav__link">Blog</NavLink>
            </div>
        </>
    )
}
