import React from 'react';
import './Hero.css';
import { NavLink } from 'react-router-dom';
import main from '../../../assets/main1.mp4';

const Hero = () => {
 
  
  return (
    <div className='Hero'>
      <video autoPlay loop muted className='back' >
        <source src={main} type="video/mp4" />
      </video>
      <div class="content">
        <h1>WHETRIP</h1>
        <NavLink to="/Booking">
          <a class="explore">Explore</a>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
