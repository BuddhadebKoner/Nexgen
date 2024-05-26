import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

import '../../styles/OurService.css'
import Servicecontainer from './Servicecontainer';

export default function OurService() {

    const createSpansForHead = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className='service_head_text'>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    // gsap codes will be here

    useGSAP(() => {
        gsap.from('.service_head_text', {
            y: 100,
            duration: 0.3,
            opacity: 0,
            delay: 0.5,
            stagger: 0.1,
            scrollTrigger: '.service_heading_spans'
        });
    })


    return (
        <>
            <div className="oer_service_section">
                <div className="our_service_heading">
                    <div className="service_heading_spans">
                        {createSpansForHead('Our Services')}
                    </div>
                </div>
                <Servicecontainer />
            </div>
        </>
    )
}
