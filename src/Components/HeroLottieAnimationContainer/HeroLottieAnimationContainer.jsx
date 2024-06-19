import React from 'react';
import '../../styles/HeroLottieAnimationContainer.css'
import Lottie from 'lottie-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


export default function HeroLottieAnimationContainer({ animationLogoData }) {
    useGSAP(() => {
        gsap.from('.viewElement', {
            y: 200,
            duration: 2,
            ease: 'elastic',
        })
    })

    return (
        <>
            <div className="HeroContainerCardText">
                <div className="HeroContainerCardTextBlurbg">
                    <div className="AboutHeroCard HeroTextContainer">
                        <h1>Hello Guys</h1>
                    </div>
                    <div className="viewElement">
                        <Lottie
                            className='viewElementLottie'
                            animationData={animationLogoData} />
                    </div>
                </div>
            </div>
        </>
    )

}