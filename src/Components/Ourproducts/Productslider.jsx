import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { productDataCard } from '../../Script';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import '../../styles/Productslider.css'
gsap.registerPlugin(ScrollTrigger);

export default function Productslider() {

    const [width, setWidth] = useState(0);
    const main_slider = useRef(null);

    useEffect(() => {
        if (main_slider.current) {
            // console.log(main_slider.current.scrollWidth,main_slider.current.offsetWidth);
            setWidth(main_slider.current.scrollWidth - main_slider.current.offsetWidth);
        }
    }, []);

    useGSAP(() => {
        gsap.from('.product_main_container', {
            y: 100,
            duration: 0.5,
            opacity: 0,
            delay: 0.5,
            scrollTrigger: '.product_main_container'
        });
    });



    return (
        <>
            <div className="product_main_container">
                <motion.div className='main_slider' ref={main_slider}>
                    <motion.div
                        // whileTap={{ cursor: "grabbing" }}
                        drag='x'
                        dragConstraints={{ right: 0, left: -1000 }} // You may need to adjust the value of 'left' dynamically based on the content width
                        className='inner_slider'>
                        {productDataCard.map((product, index) => {
                            return (
                                <motion.div key={index} className='item'>
                                    <img src={product.image} alt={`${product.heading} image`} />
                                    <h1>{product.heading}</h1>
                                    <p>{product.paragraph}</p>
                                    <a href={product.btnLink}>Learn More</a>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}