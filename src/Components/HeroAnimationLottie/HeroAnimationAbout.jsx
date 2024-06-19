import React from 'react';
import '../../styles/HeroAnimationLottie.css';


import { useLottie } from 'lottie-react';
import groovyWalkAnimation from '../../Animations/AboutUs.json';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


const style = {
    width: 750,
    height: 750,
};

const interactivity = {
    mode: "scroll",
    actions: [
        {
            visibility: [0, 0.2],
            type: "stop",
            frames: [0],
        },
        {
            visibility: [0.2, 0.45],
            type: "seek",
            frames: [0, 45],
        },
        {
            visibility: [0.45, 1.0],
            type: "loop",
            frames: [45, 60],
        },
    ],
};

export default function HeroAnimationLottie() {

    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
        interactivity: interactivity,
        style: style,
    };

    const { View } = useLottie(options);

    useGSAP(() => {
        gsap.from('.viewElement', {
            y: 200,
            duration: 2,
            ease: 'elastic',
        })
    })

    return (
        <>
            <div className="AboutHeroAnimation HeroAnimationLottieBaseContainer">
                
                <div className="AboutHeroCard HeroTextContainer">
                    <h1>Hello Guys</h1>
                </div>
                <div className="viewElement">
                    {View}
                </div>
            </div>
        </>
    )

}