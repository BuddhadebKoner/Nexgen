import React, { useState } from 'react'
import '../../styles/Motionpopup.css';


// imports for motion 
import { motion, AnimatePresence } from 'framer-motion';
import { items } from '../../Script';



export default function Motionpopup() {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <>
            <div className="group_one_continer">
                {items.slice(0, 2).map(item => (
                    <motion.div
                        key={item.id}
                        layoutId={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`item-container Card_item-${item.id}`}
                    >
                        <motion.h5 className="item-subtitle">{item.subtitle}</motion.h5>
                        <motion.h2 className="item-title">{item.title}</motion.h2>
                    </motion.div>
                ))}
            </div>
            <div className="group_two_continer">
                {items.slice(2, 4).map(item => (
                    <motion.div
                        key={item.id}
                        layoutId={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`item-container Card_item-${item.id}`}
                    >
                        <motion.h5 className="item-subtitle">{item.subtitle}</motion.h5>
                        <motion.h2 className="item-title">{item.title}</motion.h2>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId={selectedId} className="selected-item-container">
                        {items.map(item => item.id === selectedId && (
                            <React.Fragment key={item.id}>
                                <motion.button onClick={() => setSelectedId(null)} className="close-button">Close</motion.button>
                            </React.Fragment>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
