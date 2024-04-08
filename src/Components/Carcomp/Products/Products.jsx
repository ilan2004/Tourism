import React, { useEffect, useState } from 'react';
import './Products.css';
import { motion, useAnimation } from 'framer-motion';

const Products = ({ card_title, card_des, car_img, redirect }) => {
  // State to track whether the component is in view
  const [isVisible, setIsVisible] = useState(false);

  // Framer Motion controls for animation
  const imgControls = useAnimation();
  const h1Controls = useAnimation();
  const spanControls = useAnimation();

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = document.querySelector('.offer').offsetTop;

    if (scrollPosition > elementPosition && !isVisible) {
      setIsVisible(true);
    }
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run only once on component mount

  // Effect to animate elements when isVisible changes
  useEffect(() => {
    if (isVisible) {
      imgControls.start('visible');
      h1Controls.start('visible');
      spanControls.start('visible');
    }
  }, [isVisible, imgControls, h1Controls, spanControls]);

  // Define animation variants for the image
  const imgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } }
  };

  // Define animation variants for the h1 element
  const h1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  // Define animation variants for the span element
  const spanVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <div className="offer">
      <div className="container">
        <div className="card">
          {/* Apply motion component to the image with animation variants */}
          <motion.img
            src={car_img}
            alt=""
            className="card__img"
            variants={imgVariants}
            initial="hidden"
            animate={imgControls}
          />

          <div className="card__content">
            <div className="card__data">
              {/* Apply motion component to the h1 element with animation variants */}
              <motion.h1
                className="card__title"
                variants={h1Variants}
                initial="hidden"
                animate={h1Controls}
              >
                {card_title}
              </motion.h1>
              <a href="#" className="show">View</a>
              {/* Apply motion component to the span element with its own animation variants */}
              <motion.p
                className="card__description"
                variants={spanVariants}
                initial="hidden"
                animate={spanControls}
              >
                {card_des}
              </motion.p>
              <a href="#" className="card__button">Show prices</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
