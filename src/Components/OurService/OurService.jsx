import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroAnimationLottie from '../HeroAnimationLottie/HeroAnimationService';

gsap.registerPlugin(ScrollTrigger);

import '../../styles/OurService.css'
import Servicecontainer from './Servicecontainer';
import String from '../String/String';
import { serviceCardData } from '../../Script';




export default function OurService() {


    const serviceCardArray = Object.values(serviceCardData);

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
            <HeroAnimationLottie />
            <div className="our_service_section">
                <div className="our_service_heading">
                    <div className="service_heading_spans">
                        {createSpansForHead('Our Services')}
                    </div>
                </div>
                <div className="service_container">
                    {serviceCardArray.map((card, index) => (
                        <React.Fragment key={index}>
                            <Servicecontainer
                                Heading={card.heading}
                                Paragraph={card.paragraph}
                                BtnLink={card.btnLink}
                                Image={card.image}
                            />
                            <String />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}
