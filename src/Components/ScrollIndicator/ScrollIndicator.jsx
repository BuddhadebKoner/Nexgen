import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../../styles/ScrollIndicator.css';

export default function ScrollIndicator() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to('.scrollIndicator_img', {
            scrollTrigger: {
                scroller: 'body',
                trigger: '.scrollIndicator_container',
                start: 'top 80%',
                end: 'buttom -1000%',
                scrub: 2,
                markers: false,
            },
            rotation: 900,
        });
    }, []);

    return (
        <>
            <div className="scrollbar_and_arrow">

                <div className="scrollIndicator_container">
                    <img
                        className='scrollIndicator_img'
                        src="src/Assets/scrollIndicater.svg"
                        alt="Scroll Indicator"
                    />
                    <label htmlFor="scroll_arrow"></label>
                </div>
                <img className='scroll_arrow' src="src/Assets/scroll_arrow.svg" alt="" />
            </div>
        </>
    );
}
