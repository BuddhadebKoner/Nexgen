import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './HeroBigText.css'

export default function HeroBigText() {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.from('.hero_big_text_we', {
            y: 20,
            duration: 3,
            opacity: 0,
            delay: 0.5,
            stagger: 0.6,
            scrub: 4,
            ease: 'elastic.out(1, -1)',
            scrollTrigger: {
                trigger: '.hero_big_text_we h1',
                toggleActions: 'play none none none',
            },
        })
        gsap.from('.hero_big_text_creating', {
            y: 20,
            duration: 3,
            opacity: 0,
            delay: 0.5,
            stagger: 0.6,
            scrub: 4,
            ease: 'elastic.out(1, -1)',
            scrollTrigger: {
                trigger: '.hero_big_text_creating h1',
                toggleActions: 'play none none none',
            },
        })
        gsap.from('.hero_big_text_Engaging', {
            y: 20,
            duration: 3,
            opacity: 0,
            delay: 0.5,
            stagger: 0.6,
            scrub: 4,
            ease: 'elastic.out(1, -1)',
            scrollTrigger: {
                trigger: '.hero_big_text_Engaging h1',
                toggleActions: 'play none none none',
            },
        })
        gsap.from('.hero_big_text_Digital_Journeys', {
            y: 20,
            duration: 3,
            opacity: 0,
            delay: 0.5,
            stagger: 0.6,
            scrub: 4,
            ease: 'elastic.out(1, -1)',
            scrollTrigger: {
                trigger: '.hero_big_text_Digital_Journeys h1',
                toggleActions: 'play none none none',
            },
        })
    })




    return (
        <>
            <div className="hero_big_text_container">
                <div className="hero_big_text_we">
                    <h1 className='hero_big_text_h1'
                    > We
                    </h1>
                </div>
                <div className="hero_big_text_creating">
                    <h1 className='hero_big_text_h1'
                    >Creating</h1>
                </div>
                <div className="hero_big_text_Engaging">
                    <h1 className='hero_big_text_h1'
                    >Engaging</h1>
                </div>
                <div className="hero_big_text_Digital_Journeys">
                    <h1 className='hero_big_text_h1'
                    >Digital Journeys</h1>
                </div>
            </div>
        </>
    )
}
