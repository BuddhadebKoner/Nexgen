import React from 'react'
import '../../styles/MoedernTech.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


import {
  Accordion,
  AccordionTab,
} from 'primereact/accordion';

import { quaryQuestionData } from '../../Script';



gsap.registerPlugin(ScrollTrigger);


export default function MoedernTech() {




  return (
    <>
      <div className="main_container_MoedernTech">

        {/* <div className="techonologys_used_marque">
          <h1>hello</h1>
        </div> */}
        <div className="Quary_question_container">
          <Accordion activeIndex={0}>
            {Object.keys(quaryQuestionData).map((key, index) => (
              <AccordionTab
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
  )
}
