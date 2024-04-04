import React from 'react';
import vr from '../../../assets/vr.jpg';
import './Hero.css';
import { motion } from 'framer-motion';
import Object from './3d/Object/Object';
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
   <Object />
    </div>
  );
};

export default BookHero;
