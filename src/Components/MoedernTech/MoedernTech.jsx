import React, { useState } from 'react';
import '../../styles/MoedernTech.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from 'react-fast-marquee';
import MarqueTech from './MarqueTech';
import Quearryaccordion from '../Quearryaccordion/Quearryaccordion';


gsap.registerPlugin(ScrollTrigger);

export default function MoedernTech() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="main_container_MoedernTech">
        <div className="technologys_used_marque">
          <h1>Trusted by our Experts</h1>
          <Marquee>
            <MarqueTech />
          </Marquee>
        </div>
        <Quearryaccordion />
      </div>
    </>
  );
}
