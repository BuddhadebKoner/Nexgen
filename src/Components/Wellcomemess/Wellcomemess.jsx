import React, { useEffect, useRef } from 'react';
// Gsap
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// Styles --> 
import '../../styles/Wellcomemess.css';



export default function Wellcomemess() {

    gsap.registerPlugin(ScrollTrigger); // Initialize ScrollTrigger plugin

    useGSAP(() => {
        gsap.to('.box', {
            transform: 'translateX(-200%)',
            scrollTrigger: {
                trigger: '.Wellcomemess_container',
                scroller: 'body',
                start: 'top 0%',
                end: 'top -30%',
                scrub: 1,
                pin: true,
                markers: true,
            },
        });
    });

    return (
        <>
                {/* <h1>Technologys We USed</h1> */}
            <div className="Wellcomemess_container">
                   <div className="box"></div>
                   <div className="box"></div>
                   <div className="box"></div>
                   <div className="box"></div>
            </div>
        </>
    );
}
