import React from 'react';

import {
    Accordion,
    AccordionTab,
  } from 'primereact/accordion';
  import { quaryQuestionData } from '../../Script';

export default function Accordion() {

    return (

        <>
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
        </>

    )

}