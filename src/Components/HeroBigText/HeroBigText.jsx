import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import '../../styles/HeroBigText.css'
import FloatNav from '../FloatNav/FloatNav'

gsap.registerPlugin(ScrollTrigger)

export default function HeroBigText() {
    useGSAP(() => {
        gsap.from('.hero_big_text_we span', {
            y: 100,
            duration: 0.5,
            opacity: 0,
            delay: 0.5,
            stagger: 0.12,
            scrollTrigger: '.hero_big_text_we'
        });
        gsap.from('.hero_big_text_creating span', {
            y: 100,
            duration: 0.3,
            opacity: 0,
            delay: 0.5,
            stagger: 0.12,
            scrollTrigger: '.hero_big_text_creating'
        });
        gsap.from('.hero_big_text_Engaging span', {
            y: 100,
            duration: 0.3,
            opacity: 0,
            delay: 0.5,
            stagger: 0.12,
            scrollTrigger: '.hero_big_text_Engaging',
        });
        gsap.from('.hero_big_text_Digital_Journeys span', {
            y: 100,
            duration: 0.3,
            opacity: 0,
            delay: 0.5,
            stagger: 0.12,
            scrollTrigger: '.hero_big_text_Digital_Journeys',
        });
    });

    const createSpans = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className='hero_big_text_span'>{char}</span>
        ));
    };
    useGSAP(() => {
        gsap.from('heroimage img', {
            y: 100,
            duration: 0.3,
            opacity: 0,
            delay: 0.5,
        })
    });

    return (
        <>
            <div className="hero_big_text_container">
                <div className="hero_big_text_we">
                    {createSpans('We')}
                </div>
                <div className="hero_big_text_creating">
                    {createSpans('Creating')}
                </div>
                <div className="hero_big_text_Engaging">
                    {createSpans('Engaging')}
                </div>
                <div className="hero_big_text_Digital_Journeys">
                    {createSpans('Digital_Journeys')}
                </div>
            </div>
        </>
    )
}
