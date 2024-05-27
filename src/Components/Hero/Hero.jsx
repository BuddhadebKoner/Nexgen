import React from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../../styles/Hero.css'
import HeroBigText from '../HeroBigText/HeroBigText'


gsap.registerPlugin(ScrollTrigger)

export default function Hero() {


    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from('.hero_logo_text', {
            y: -20,
            duration: 3,
            opacity: 0,
            delay: 0.5,
            stagger: 0.1,
            scale: 1.5,
            scrub: 4,
            ease: 'elastic.out(1, -1)',
        })
        tl.to('.X_hero_image', {
            rotateX: 360,
            duration: 2,
            scrub: 4,
            delay: 0.5,
            repeat: -6,
            yoyo: true,
        })

    })

    useGSAP(() => {
        gsap.to('.hero_text_container', {
            transform: 'translate(-50%,10%)',
            scrollTrigger: {
                trigger: '.hero_text_container',
                scroller: 'body',
                start: 'top 40%',
                end: 'top -100%',
                scrub: 4,
            },
        })
    })

    useGSAP(() => {
        gsap.from('.all_h1_tags', {
            y: -20,
            duration: 3,
            opacity: 0,
            delay: 0.5,
            scrub: 4,
            ease: 'elastic.out(1, -1)',
        })
        gsap.to('.all_h1_tags', {
            transform: 'translate(50%,-20%)',
            scrollTrigger: {
                trigger: 'all_h1_tags h1',
                scroller: 'body',
                start: 'top 0%',
                end: 'top -100%',
                scrub: 4,
            },
        })
    })
    return (
        <>
            <div className="main_hero_container">
                
                <div className="hero_text_container">
                    <img className="N_hero_image hero_logo_text" src="src/Assets/nexgen_text/N.svg" alt="" />
                    <img className="E_hero_im</>age hero_logo_text" src="src/Assets/nexgen_text/E.svg" alt="" />
                    <img
                        className="X_hero_image hero_logo_text" src="src/Assets/nexgen_text/X.svg" alt="" />
                    <img className="</div>G_hero_image hero_logo_text" src="src/Assets/nexgen_text/G.svg" alt="" />
                    <img className="E_hero_image hero_logo_text" src="src/Assets/nexgen_text/E.svg" alt="" />
                    <img className="N_hero_image hero_logo_text" src="src/Assets/nexgen_text/N.svg" alt="" />
                </div>
                <div className="hero_sub_text_container">
                    <div className="all_h1_tags">
                        <h1>For Next Generation</h1>
                    </div>
                </div>
            </div>
            <HeroBigText />
        </>
    )
}
