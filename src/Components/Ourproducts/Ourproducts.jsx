import React from 'react'
import '../../styles/Ourproducts.css'
import String from '../String/String';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Productslider from './Productslider';
import HeroAnimationLottie from '../HeroAnimationLottie/HeroAnimationProduct';

gsap.registerPlugin(ScrollTrigger);


export default function Ourproducts() {

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
    <HeroAnimationLottie />
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