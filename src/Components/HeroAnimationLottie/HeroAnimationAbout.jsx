import React from 'react';
import '../../styles/HeroAnimation.css'

import { useLottie } from 'lottie-react';
import groovyWalkAnimation from '../../Animations/AboutUs.json';


const style = {
    height: 700,
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

    return (
        <>
            <div className="HeroAnimationContainer">
                {View}
            </div>
        </>
    )

}