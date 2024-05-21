import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

import './Wellcomemess.css';

export default function Wellcomemess() {

    gsap.registerPlugin(ScrollTrigger); // Initialize ScrollTrigger plugin

    useGSAP(() => {
        gsap.to('.Wellcomemess_container h1', {
            transform: 'translateX(-55%)',
            scrollTrigger: {
                trigger: '.Wellcomemess_container',
                scroller: 'body',
                start: 'top 0%',
                end: 'top -100%',
                scrub: 3,
                pin: true,
                markers: true,
            },
        });
    });

    return (
        <>
            <div className="Wellcomemess_container">
                <h1>Welcome</h1>
            </div>
        </>
    );
}
