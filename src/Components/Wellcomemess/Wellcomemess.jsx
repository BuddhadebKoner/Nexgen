import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

import '../../styles/Wellcomemess.css';

export default function Wellcomemess() {

    gsap.registerPlugin(ScrollTrigger); // Initialize ScrollTrigger plugin

    useGSAP(() => {
        gsap.to('.Wellcomemess_container h1', {
            transform: 'translateY(50%)',
            scrollTrigger: {
                trigger: '.Wellcomemess_container',
                scroller: 'body',
                start: 'top 0%',
                end: 'top -30%',
                scrub: 3,
                pin: true,
                markers: true,
            },
        });
    });

    return (
        <>
                {/* <h1>Technologys We USed</h1> */}
            <div className="Wellcomemess_container">
                   <h1>Wellcome To NEXGEN</h1>
            </div>
        </>
    );
}
