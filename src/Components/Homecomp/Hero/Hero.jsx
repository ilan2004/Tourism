import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { NavLink } from 'react-router-dom';
import main from '../../../assets/main1.mp4';
import SplitType from 'split-type'; // Import SplitType library
import { gsap } from 'gsap'; // Import gsap library

const Hero = () => {
  const contentRef = useRef(null); // Create a ref for the content element

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateText(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the element is in view

    // Observe the content element
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up observer
    };
  }, [contentRef]); // Ensure this effect runs when contentRef changes

  // Function to animate the text element
  const animateText = (element) => {
    const myText = new SplitType(element);

    gsap.to(element.querySelectorAll('.char'), {
      y: 0,
      stagger: 0.05,
      delay: 1,
      duration: 0.4
    });
  };

  return (
    <div className='Hero'>
      <video playsInline autoPlay loop muted className='back' >
        <source src={main} type="video/mp4" />
      </video>
      <div ref={contentRef} className="content">
        <h1>WHETRIP</h1>
        <NavLink to="/Booking">
          <a className="explore">Explore</a>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;

