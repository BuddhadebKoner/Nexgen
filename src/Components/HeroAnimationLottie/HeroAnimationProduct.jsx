import React from 'react';
import '../../styles/HeroAnimationLottie.css';


// Lottie animations 
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from '../../Animations/ProductMaking.json';

// Here all Gsap Imports
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const style = {
    width: 650,
    height: 650,
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

    // Lottie animations Options 
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
        interactivity: interactivity,
        style: style,
    };

    // View sectioon for Lottie animations
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
            <div 
            className="ProductHeroAnimations HeroAnimationLottieBaseContainer"
            >
                <div className="ProductHeroCard HeroTextContainer">
                    <h1>Hello Guys</h1>
                </div>
                <div className="viewElement">
                    {View}
                </div>
            </div>
        </>

    )

}