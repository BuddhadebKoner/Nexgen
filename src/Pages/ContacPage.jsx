import React from 'react'
import HeroLottieAnimationContainer from '../Components/HeroLottieAnimationContainer/HeroLottieAnimationContainer'
import { HeroAnimations } from '../Animations/animation'

export default function ContacPage() {
  return (
    <>
    <HeroLottieAnimationContainer 
    animationLogoData={HeroAnimations[3]}  
    />
    </>
  )
}
