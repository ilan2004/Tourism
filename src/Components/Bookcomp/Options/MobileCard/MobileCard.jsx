import React, { useEffect, useState } from 'react';
import './MobileCard.css';
import { motion, useAnimation } from 'framer-motion';

const MobileCard = ({ card_title, card_des, room_img, redirect }) => {
  // State to track whether the component is in view
  const [isVisible, setIsVisible] = useState(false);

  // Framer Motion controls for animations
  const imgControls = useAnimation();
  const contentControls = useAnimation();

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = document.querySelector('.MobileCard').offsetTop;

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
      contentControls.start('visible');
    }
  }, [isVisible, imgControls, contentControls]);

  // Define animation variants for the image
  const imgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } }
  };

  // Define animation variants for the content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <div className='MobileCard'>
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              {/* Apply motion component to the image with animation variants */}
              <motion.img
                src={room_img}
                alt=""
                variants={imgVariants}
                initial="hidden"
                animate={imgControls}
              />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code" variants={contentVariants} initial="hidden" animate={contentControls}>26 December 2019</span>
              <div className="blog-slider__title" variants={contentVariants} initial="hidden" animate={contentControls}>{card_title}</div>
              <div className="blog-slider__text" variants={contentVariants} initial="hidden" animate={contentControls}>{card_des}</div>
              <div className="buttons">
                <a href={redirect} className="blog-slider__button_vr">VIEW IN VR</a>
                <a href={redirect} className="blog-slider__button">SEE MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
