import React, { useEffect, useRef } from 'react';
import vr from '../../../assets/vr.jpg';
import './Hero.css';
import { motion } from 'framer-motion';
import Object from './3d/Object/Object';
import SplitType from 'split-type'; // Import SplitType library
import { gsap } from 'gsap'; // Import gsap library

const BookHero = () => {
  const h1Ref = useRef(null); // Create a ref for the h1 element
  const h2Ref = useRef(null); // Create a ref for the h2 element

  useEffect(() => {
    const observerH1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateText(entry.target);
          observerH1.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the element is in view

    const observerH2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateText(entry.target);
          observerH2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the element is in view

    // Observe the text elements
    if (h1Ref.current) {
      observerH1.observe(h1Ref.current);
    }
    if (h2Ref.current) {
      observerH2.observe(h2Ref.current);
    }

    return () => {
      observerH1.disconnect(); // Clean up observer
      observerH2.disconnect(); // Clean up observer
    };
  }, [h1Ref, h2Ref]); // Ensure this effect runs when h1Ref or h2Ref changes

  // Function to animate the text element
  const animateText = (element) => {
    const myText = new SplitType(element);

    gsap.to(element.querySelectorAll('.char'), {
      y: 0,
      stagger: 0.05,
      delay: 0.4,
      duration: 0.3
    });
  };

  return (
    <div className='BookHero'>
      <div className="herotext">
        {/* Apply the ref to the h1 element */}
        <h1 ref={h1Ref}>
          VR HOTEL BOOKING
        </h1>
        {/* Apply the ref to the h2 element */}
        <h2 ref={h2Ref}>
          Booking Hotels Made Easier
        </h2>
      </div>
      <Object />
    </div>
  );
};

export default BookHero;
