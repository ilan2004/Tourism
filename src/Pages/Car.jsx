import React from 'react'
import Carhero from '../Components/Carcomp/CarHero/Carhero';
import Horizontal from '../Components/Carcomp/Horizontal/Horizontal';
import Showing from '../Components/Carcomp/Products/showing';
import Navbars from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Stairs from '../Components/Layout/Stairs';
 const Car = () => {
  return (
    <div className='Car'>
      <Stairs/>
        <Navbars />
        <Carhero/>
        <Horizontal/>
        <Showing/>
        <Footer />
    </div>
  )
}

export default Car;