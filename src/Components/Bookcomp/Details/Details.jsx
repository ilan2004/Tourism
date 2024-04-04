import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Details.css';

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Details = () => {
  useEffect(() => {
    // Define GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true
      }
    });

    // Add animations to timeline
    tl.to("#center", {
      height: "100vh",
    }, 'a')
      .to("#top", {
        top: "-50%",
      }, 'a')
      .to("#bottom", {
        bottom: "-50%",
      }, 'a')
      .to("#top-h1", {
        top: "60%"
      }, 'a')
      .to("#bottom-h1", {
        bottom: "-30%"
      }, 'a')
      .to("#center-h1", {
        top: "-30%"
      }, 'a')
      .to(".contents", {
        delay: -0.2,
        marginTop: "0%"
      });

    // Cleanup function
    return () => {
      tl.kill(); // Dispose timeline
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="details">


    <div id="main">
      <div id="top">
        <h1 id="top-h1">HOTELS</h1>
      </div>
      <div id="center">
        <div className="contents">
          <h4>HOTELS</h4>
          <h3><i>Browse</i> the work that define a <i>movement</i> and created a craft.</h3>
          <div className="btn">
            <h5>ENTER GALLERY</h5>
          </div>
          <h2>(17)</h2>
        </div>
      </div>
      <div id="bottom">
        <h1 id="bottom-h1">HOTELS</h1>
      </div>
    </div>
    </div>
  );
};

export default Details;
