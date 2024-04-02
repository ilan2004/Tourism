import React from 'react';
import vr from '../../../assets/vr.jpg';
import './Hero.css';
import { motion } from 'framer-motion';

const BookHero = () => {
  // Define animation variants for the h1 element
  const h1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.8 } }
  };

  // Define animation variants for the span element
  const spanVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.9 } }
  };

  return (
    <div className='BookHero'>
      <img className="be" src={vr} />
      <div className="kind">
        {/* Apply motion component to the h1 element with animation variants */}
        <motion.h1
          className="edit"
          variants={h1Variants}
          initial="hidden"
          animate="visible"
        >
          BOOKING HOTELS MADE EASIER WITH VR
        </motion.h1>
        {/* Apply motion component to the span element with its own animation variants */}
        <motion.span
          variants={spanVariants}
          initial="hidden"
          animate="visible"
          className="js">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, debitis sapiente minima laudantium molestiae distinctio consectetur quisquam ?
        </motion.span>
      </div>
    </div>
  );
};

export default BookHero;
