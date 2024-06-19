import React from 'react'
import HeroLottieAnimationContainer from '../Components/HeroLottieAnimationContainer/HeroLottieAnimationContainer'
import { HeroAnimations } from '../Animations/animation'

export default function AboutPage() {
  console.log(HeroAnimations);
  return (
    <>
      <HeroLottieAnimationContainer
        animationLogoData={HeroAnimations[2]}
      />
    </>
  )
}
