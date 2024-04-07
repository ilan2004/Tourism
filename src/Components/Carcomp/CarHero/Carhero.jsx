import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Carhero.css';
import media1 from '../../../assets/both1.mp4';
import media2 from '../../../assets/both2.mp4';
const Carhero = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from("h1", {
      y: 150,
      ease: "power4.inOut",
      stagger: {
        amount: 0.1,
      },
    });

    gsap.from("p", {
      y: 30,
      ease: "power3.inOut",
      stagger: {
        amount: 0.25,
      },
    });

    gsap.from(".loader-wrapper", {
      scale: 0.8,
      ease: "power1.inOut",
      delay: 2,
    });

    gsap.from(".loader", {
      top: "100%",
      ease: "power3.inOut",
    });

    gsap.to(
      [".loader-wrapper", ".pre-loader"],
      {
        top: "-100",
        ease: "power3.inOut",
        delay: 2,
      },
      "-=1"
    );

    // Mousemove event listener
    const handleMouseMove = (e) => {
      const normX = e.clientX / window.innerWidth - 0.5;
      const normY = e.clientY / window.innerWidth - 0.5;

      const moveX = normX * 100;
      const moveY = normY * 100;
      const rotateZ = normX * 25;

      gsap.to(".bubbles", {
        x: moveX,
        y: moveY,
        rotationZ: rotateZ,
        ease: "power2.out",
        duration: 1.5,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="carhero"> 
      <div className="heros">
        <div className="headers">
            <h1>CAR RENTAL SERVICE</h1>
            <div className="h1revealer"></div>
        </div>
      </div>
      <div className="bubbles"></div>

    </div>
  );
};

export default Carhero;
