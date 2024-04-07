import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Horizontal.css';

const Horizontal = () => {
  const racesRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;
    const getScrollAmount = () => {
      let racesWidth = races.scrollWidth;
      let windowWidth = window.innerWidth;
      return -(racesWidth - windowWidth);
    };

    const tween = gsap.to(races, {
      x: getScrollAmount(),
      duration: 2,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: racesRef.current, // Use racesRef directly here
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 3,
      invalidateOnRefresh: true,

    });

    // Cleanup
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
    };
  }, []);

  // Update scroll amount and pinning behavior on window resize
  useEffect(() => {
    const updateScrollTrigger = () => {
      const races = racesRef.current;
      const getScrollAmount = () => {
        let racesWidth = races.scrollWidth;
        let windowWidth = window.innerWidth;
        return -(racesWidth - windowWidth);
      };

      gsap.set(races, { clearProps: 'x' }); // Clear previous x position
      tween.vars.x = getScrollAmount(); // Update tween x value
      ScrollTrigger.refresh(); // Refresh ScrollTrigger
    };

    window.addEventListener('resize', updateScrollTrigger);

    return () => {
      window.removeEventListener('resize', updateScrollTrigger);
    };
  }, []);

  // Adjust the end point for mobile devices
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Assuming mobile breakpoint is 768px
    if (isMobile) {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.end = `+=${window.innerWidth * 10}`;
      });
    }
  }, []);

  return (
    <div>
      {/* <div className="space-50vh lightBG"></div> */}
      <div className="racesWrapper">
        <div className="races" ref={racesRef}>
          <h2>RENTING</h2>
          <h2>CARS</h2>
          <h2>NEVER BEEN EASIER</h2>
        </div>
      </div>
      {/* <div className="space-100vh lightBG"></div> */}
    </div>
  );
};

export default Horizontal;
