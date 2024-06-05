import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/AimContent.css';

gsap.registerPlugin(ScrollTrigger);

export default function AimContent() {
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
      <div className="Whats_Are_New_container">
        <h1>hello</h1>
      </div>
    </div>
  );
}
