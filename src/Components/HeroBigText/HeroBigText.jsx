import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './HeroBigText.css'

gsap.registerPlugin(ScrollTrigger)


export default function HeroBigText() {
    useGSAP(() => {
        let tl = gsap.timeline()

        tl.from('.hero_big_text_we span', {
            y: 100,
            duration: 0.3,
            opacity: 0,
            delay: 0.1,
            stagger: 0.12,
        });
        tl.from('.hero_big_text_creating span', {
            y: 100,
            duration: 0.3,
            opacity: 0,
            stagger: 0.12,
        });
        tl.from('.hero_big_text_Engaging span', {
            y: 100,
            duration: 0.3,
            opacity: 0,
            stagger: 0.12,
        });
        tl.from('.hero_big_text_Digital_Journeys span', {
            y: 100, 
            duration: 0.3,
            opacity: 0, 
            stagger: 0.12,
        });
    });


    return (
        <>
            <div className="hero_big_text_container">
                <div className="hero_big_text_we">
                    <span id="we" className='hero_big_text_span'>W</span>
                    <span id="e" className='hero_big_text_span'>e</span>
                </div>
                <div className="hero_big_text_creating">
                    <span id="c" className='hero_big_text_span'>C</span>
                    <span id="r" className='hero_big_text_span'>r</span>
                    <span id="e" className='hero_big_text_span'>e</span>
                    <span id="a" className='hero_big_text_span'>a</span>
                    <span id="t" className='hero_big_text_span'>t</span>
                    <span id="i" className='hero_big_text_span'>i</span>
                    <span id="n" className='hero_big_text_span'>n</span>
                    <span id="g" className='hero_big_text_span'>g</span>
                </div>
                <div className="hero_big_text_Engaging">
                    <span id="E" className='hero_big_text_span'>E</span>
                    <span id="n" className='hero_big_text_span'>n</span>
                    <span id="g" className='hero_big_text_span'>g</span>
                    <span id="a" className='hero_big_text_span'>a</span>
                    <span id="g" className='hero_big_text_span'>g</span>
                    <span id="i" className='hero_big_text_span'>i</span>
                    <span id="n" className='hero_big_text_span'>n</span>
                    <span id="g" className='hero_big_text_span'>g</span>
                </div>
                <div className="hero_big_text_Digital_Journeys">
                    <span className='hero_big_text_span'>D</span>
                    <span className='hero_big_text_span'>i</span>
                    <span className='hero_big_text_span'>g</span>
                    <span className='hero_big_text_span'>i</span>
                    <span className='hero_big_text_span'>t</span>
                    <span className='hero_big_text_span'>a</span>
                    <span className='hero_big_text_span'>l_</span>
                    <span className='hero_big_text_span'>J</span>
                    <span className='hero_big_text_span'>o</span>
                    <span className='hero_big_text_span'>u</span>
                    <span className='hero_big_text_span'>r</span>
                    <span className='hero_big_text_span'>n</span>
                    <span className='hero_big_text_span'>e</span>
                    <span className='hero_big_text_span'>y</span>
                    <span className='hero_big_text_span'>s</span>
                </div>
            </div>
        </>
    )
}
