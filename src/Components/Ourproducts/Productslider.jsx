import React from 'react'
import { motion } from 'framer-motion'
import { sliderData } from '../../Script';

import '../../styles/Productslider.css'

export default function Productslider() {
    return (
        <>
            <div className="product_main_container">
                <motion.div className='main_slider'>
                    <motion.div
                        drag='x'
                        dragConstraints={{ right: 0 }}
                        className='inner_slider'>
                        {sliderData.map((image, index) => {
                            return (
                                <motion.div key={index} className='item'>
                                    <img src={image} alt="slider_image" />
                                    <h1>hello</h1>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}
