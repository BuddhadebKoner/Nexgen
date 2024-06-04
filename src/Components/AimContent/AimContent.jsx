import React, { useEffect, useCallback, useRef } from 'react';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import '../../styles/AimContent.css';
import String from '../String/String';
import { ScrollBarAniamtionArrowImg } from '../../Script';

// window.addEventListener('wheel', function (e) {
//   if (e.deltaY > 0) {
//     console.log(ok);
//   } else {
//     console.log(lok);
//   }
// })

gsap.registerPlugin(ScrollTrigger)

export default function AimContent() {
  useGSAP(() => {

    gsap.to('.marque', {
      transform: 'translateX(-100%)',
      duration: 2,
      repeat: -1,
      ease: 'none',
    })
    gsap.to('.marque img', {
      rotate: 90,
      duration: 2.5,
      scrollTrigger: '.marque img',
    }
    )
  }, []);

  useGSAP(() => {
    gsap.from('.about_para_text', {
      y: 60,
      duration: 0.6,
      opacity: 0,
      stagger: 0.005,
      delay: 0.5,
      scrollTrigger: '.about_para_text',
    })
  }, []);



  // creating spans eseyly for head and para

  // const createSpansForHEad = (text) => {
  //   return text.split('').map((char, index) => (
  //     <span key={index} className='about_head_text'>
  //       {char === ' ' ? '\u00A0' : char}
  //     </span>
  //   ));
  // };

  const createSpansForpara = (text) => {
    return text.split(' ').map((word, wordIndex) => (
      <div key={wordIndex} className='about_para_word'>
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className='about_para_text'>
            {char}
          </span>
        ))}
        <span className='about_para_text'>&nbsp;</span>
      </div>
    ));
  };



  return (
    <div className="about_us_desc">
      <div className="Whats_Are_New_container_marque">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="marque" key={index}>
            <h1>PUSH THE LIMITS</h1>
            <img src={ScrollBarAniamtionArrowImg[0]} alt="" />
          </div>
        ))}
      </div>
      <String />
      <div className="Whats_Are_New_container">
        <div className="Whats_Are_New_container_description">
          <div className="descript_container_and_btn">
            <div className="descript_container">
 {createSpansForpara('At Brandium we craft strong brand identities, visually striking website designs, and impactful marketing campaigns that go beyond the ordinary. We transform your business into a digital powerhouse')}
            </div>
            <div className="descript_container_links">
              <a className='descript_container_btn' href="">Get in touch</a>
              <a className='descript_container_btn' href="">Explore</a>
              <a className='descript_container_btn' href="">Contribute</a>
              <a className='descript_container_btn' href="">Go</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
