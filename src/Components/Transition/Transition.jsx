import React from 'react';
import { motion } from 'framer-motion';
import './Transition.css';

const Transition = (OgComponent) => {
  return (
    <div>
      <motion.div
        className="slide-In"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <OgComponent /> {/* Render the Original Component here */}
      </motion.div>
      <motion.div
        className="slide-Out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

export default Transition;
