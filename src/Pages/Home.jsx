import React from 'react';
import Hero from '../Components/Homecomp/Hero/Hero';
import Newsletter from '../Components/Homecomp/Newsletter/Newsletter';
import Gallery from '../Components/Homecomp/Gallery/Gallery';
import Transport from '../Components/Homecomp/Transport/Transport';
import Kodai from '../Components/Homecomp/Kodaikanal/Kodai';
import VRroom from '../Components/Homecomp/VRroom/VRroom';
import Login from '../Components/Homecomp/Login/Login';
import Stairs from '../Components/Layout/Stairs';

const Home = () => {
  return (
    <>
    <Stairs>
      <div>
        <Hero/>
        <Newsletter/>
        <Gallery/>
        <Transport/>
        <Kodai/>
        <VRroom/>
        <Login/>
      </div>
      </Stairs>
    </>
  );
};

export default Home; // Check how you're using the Transition component
