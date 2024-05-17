import React from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import './Hero.css'
export default function Hero() {
    return (
        <>
            <div className="main_hero_container">
                <div className="hero_text_container">
                    <img className="N_hero_image" src="N.svg" alt="" />
                    <img className="E_hero_image" src="E.svg" alt="" />
                    <img className="X_hero_image" src="X.svg" alt="" />
                    <img className="G_hero_image" src="G.svg" alt="" />
                    <img className="E_hero_image" src="E.svg" alt="" />
                    <img className="N_hero_image" src="N.svg" alt="" />
                </div>
            </div>
        </>
    )
}
