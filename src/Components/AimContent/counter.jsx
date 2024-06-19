// src/components/Counter/Counter.js
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ endValue, duration = 5 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const updateCount = (value) => {
      setCount(Math.ceil(value));
    };

    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 100%",
      end: "bottom -10%",
      onEnter: () => {
        gsap.to({}, {
          duration: duration,
          ease: 'power1.out',
          onUpdate: function () {
            const progress = this.progress();
            const value = endValue * progress;
            updateCount(value);
          },
        });
      },
    });

    return () => {
      trigger.kill(); // kill scroll trigger
    };
  }, [endValue, duration]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };

  return <h1 ref={counterRef}>{formatNumber(count)}+</h1>;
};

export default Counter;
