import React, { useState } from 'react';
import '../../styles/MoedernTech.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from 'react-fast-marquee';
import MarqueTech from './MarqueTech';
import {
  Accordion,
  AccordionTab,
} from 'primereact/accordion';
import { quaryQuestionData } from '../../Script';

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

        <div className="Quary_question_container">
          <Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            {Object.keys(quaryQuestionData).map((key, index) => (
              <AccordionTab
                tabIndex={-1}
                key={index}
                header={quaryQuestionData[key].heading}
              >
                <p className="expand_quarry_section">
                  {quaryQuestionData[key].paragraph}
                </p>
              </AccordionTab>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
