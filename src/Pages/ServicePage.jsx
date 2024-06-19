import React from 'react'
import Service from '../Components/OurService/OurService'
import HeroLottieAnimationContainer from '../Components/HeroLottieAnimationContainer/HeroLottieAnimationContainer'
import { HeroAnimations } from '../Animations/animation'

export default function ServicePage() {
  return (
    <>
    <HeroLottieAnimationContainer 
    animationLogoData={HeroAnimations[0]}
    />
    <Service/>
    </>
  )
}
