import React from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import './Hero.css'
export default function Hero() {

    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from('.hero_logo_text', {
            y: -20,
            duration: 2,
            opacity: 0,
            delay: 0.5,
            stagger: 0.1,
            scale: 1.5,
            ease: 'elastic.out(1, -1)',
        })
        tl.to('.X_hero_image', {
            rotate: 50,
            duration: 2,
            delay: 0.5,
            repeat: -6,
            yoyo: true,
        })
    })
    return (
        <>
            <div className="main_hero_container">
                <div className="hero_text_container">
                    <img className="N_hero_image hero_logo_text" src="N.svg" alt="" />
                    <img className="E_hero_im</>age hero_logo_text" src="E.svg" alt="" />
                    <img
                        className="X_hero_image hero_logo_text" src="X.svg" alt="" />
                    <img className="</div>G_hero_image hero_logo_text" src="G.svg" alt="" />
                    <img className="E_hero_image hero_logo_text" src="E.svg" alt="" />
                    <img className="N_hero_image hero_logo_text" src="N.svg" alt="" />
                </div>
                {/* <iframe 
                src='https://my.spline.design/untitled-81091ba6f7db7fba14e41a82633b20ca/' frameborder='0' width='100%' height='100%'></iframe> */}
            </div>
        </>
    )
}
