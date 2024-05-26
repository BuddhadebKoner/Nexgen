import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../../styles/FloatNav.css'

gsap.registerPlugin(ScrollTrigger)

export default function FloatNav() {

    useGSAP(() => {
        gsap.from('.FloatNav__link', {
            scrollTrigger: {
                trigger: '.FloatNav__links',
                scroller: 'body',
                start: 'top -40%',
                end: 'top -100%',
                scrub: 1,
            },
            y: 50,
            x: 250,
            opacity: 0,
            visibility: 'visible',
            stagger: 0.1
        });
    });

    return (
        <>
            <div
                className="FloatNav__links">
                {/* <div className="floatNav_overlay"></div> */}
                    <a href="#work" className="FloatNav__link">Service</a>
                    <a href="#work" className="FloatNav__link">Product</a>
                    <a href="#about" className="FloatNav__link">About</a>
                    <a href="#contact" className="FloatNav__link">Contact</a>
                    <a href="#blog" className="FloatNav__link">Blog</a>

            </div>
        </>
    )
}
