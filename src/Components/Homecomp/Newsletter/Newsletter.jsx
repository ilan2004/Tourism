import React, { useEffect, useRef } from 'react';
import './Newsletter.css';
import SplitType from 'split-type'; // Import SplitType library
import { gsap } from 'gsap'; // Import gsap library

const Newsletter = () => {
  const newsletterRef = useRef(null); // Create a ref for the newsletter element

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateText(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the element is in view

    // Observe the newsletter element
    if (newsletterRef.current) {
      observer.observe(newsletterRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up observer
    };
  }, [newsletterRef]); // Ensure this effect runs when newsletterRef changes

  // Function to animate the text element
  const animateText = (element) => {
    const myText = new SplitType(element);

    gsap.to(element.querySelectorAll('.char'), {
      y: 0,
      stagger: 0.02,
      delay: 0.2,
      duration: 0.1
    });
  };

  return (
    <div className='Newsletter'>
      <h2 class="Help">We are here to help you?</h2>
      <p class="Subscribe">Subscribe to get our newsletters</p>

      <a href="#" input type="button" value="Click me" class="Subscribe-box">Subscribe Newsletters</a>
    </div>
    
  );
};

export default Newsletter;
