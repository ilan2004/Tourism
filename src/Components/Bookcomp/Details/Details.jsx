import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Details.css';
import Options from '../Options/Options';

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Details = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true
      }
    });

    const updateAnimationForViewport = () => {
      const windowWidth = window.innerWidth;

      const centerHeight = windowWidth > 768 ? "100vh" : "50vh";
      const topPosition = windowWidth > 768 ? "-50%" : "-25%";
      const bottomPosition = windowWidth > 768 ? "-50%" : "-25%";
      const topH1Position = windowWidth > 768 ? "60%" : "30%";
      const bottomH1Position = windowWidth > 768 ? "-30%" : "-15%";

      tl.to("#center", {
        height: centerHeight,
      }, 'a')
      .to("#top", {
        top: topPosition,
      }, 'a')
      .to("#bottom", {
        bottom: bottomPosition,
      }, 'a')
      .to("#top-h1", {
        top: topH1Position,
      }, 'a')
      .to("#bottom-h1", {
        bottom: bottomH1Position,
      }, 'a')
      .to("#center-h2", {
        top: bottomH1Position,
      }, 'a')
      .to(".content", {
        delay: -0.2,
        marginTop: "0%"
      });
    };

    updateAnimationForViewport();

    const resizeHandler = () => {
      updateAnimationForViewport();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      tl.kill();
    };
  }, []);

  return (
    <div className='details'>
      <div id="main">
        <div className='top' id="top">
          <h1 id="top-h1">HOTELS</h1>
        </div>
        <div id="center">
          <div className="content">
            <h4>HOTELS</h4>
            <h3><i>"Experience</i> Tomorrow Today: <i>Virtual Reality</i> Hotel Booking for Your Dream Getaway</h3>
            <div className="btn">
              <h5>Book Now</h5>
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
