import React from 'react'
import Ourproducts from '../Components/Ourproducts/Ourproducts'
import HeroLottieAnimationContainer from '../Components/HeroLottieAnimationContainer/HeroLottieAnimationContainer'
import { HeroAnimations } from '../Animations/animation'

export default function ProductPage() {
  return (
    <>
    <HeroLottieAnimationContainer 
    animationLogoData={HeroAnimations[1]}
    />
    {/* <Ourproducts/> */}
    </>
  )
}
