import React from 'react'
import HeroLottieAnimationContainer from '../Components/HeroLottieAnimationContainer/HeroLottieAnimationContainer'
import { HeroAnimations } from '../Animations/animation'

export default function BlogPage() {
  return (
    <>
      <HeroLottieAnimationContainer
        animationLogoData={HeroAnimations[4]}
      />
    </>
  )
}
