import React, { useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/String.css'


gsap.registerPlugin(ScrollTrigger);


export default function String() {


    const svgRef = useRef(null);
    const initialPath = 'M 10 100 Q 500 100 990 100';
    let currentPath = initialPath;

    const StringMouseEnter = useCallback((event) => {
        const boundingRect = svgRef.current.getBoundingClientRect();
        const x = event.clientX - boundingRect.left;
        const y = event.clientY - boundingRect.top;

        currentPath = `M 10 100 Q ${x} ${y} 990 100`;

        gsap.to(svgRef.current.querySelector('path'), {
            attr: { d: currentPath },
            duration: 0.3,
            ease: "power3.out",
        });
    }, []);

    const StringMouseLeave = useCallback(() => {
        currentPath = initialPath;

        gsap.to(svgRef.current.querySelector('path'), {
            attr: { d: currentPath },
            duration: 0.5,
            ease: "bounce.out",
        });
    }, []);

    useEffect(() => {
        const svgElement = svgRef.current;

        svgElement.addEventListener('mousemove', StringMouseEnter);
        svgElement.addEventListener('mouseleave', StringMouseLeave);

        return () => {
            svgElement.removeEventListener('mousemove', StringMouseEnter);
            svgElement.removeEventListener('mouseleave', StringMouseLeave);
        };
    }, [StringMouseEnter, StringMouseLeave]);


    return (
        <>
            <div className="string_container">
                <div className="string">
                    <svg ref={svgRef} width="1000" height="200">
                        <path d='M 10 100 Q 500 100 990 100' stroke="white" strokeWidth="3" fill="  transparent" />
                    </svg>
                </div>
            </div>
        </>
    )
}
