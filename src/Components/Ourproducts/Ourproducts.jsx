import React from 'react'
import '../../styles/Ourproducts.css'
import String from '../String/String';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Productslider from './Productslider';


// Lottie animations 
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from '../../Animations/ProductMaking.json';

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



export default function Ourproducts() {

  // Lottie animations Options 
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    interactivity: interactivity,
    style: style,
  };

  // View sectioon for Lottie animations
  const { View } = useLottie(options);

  const createSpansForHead = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className='product_head_text'>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  // gsap animation is start from here
  // head animations

  useGSAP(() => {
    gsap.from('.product_head_text', {
      x: 100,
      duration: 0.3,
      opacity: 0,
      delay: 0.5,
      stagger: 0.1,
      scrollTrigger: '.product_heading_spans'
    });
  })

  return (
    <>
      <div className="ProductHeroAnimations">
        {View}
      </div>
      <div className="Our_product_section">
        <div className="product_heading_container">
          <div className="product_heading_spans">
            {createSpansForHead('Our Products')}
          </div>
        </div>
        <div className="products_container">
          <Productslider />
        </div>
        <div className="desc_about_products">
        </div>
      </div>
    </>
  )
}