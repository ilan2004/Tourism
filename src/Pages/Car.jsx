import React from 'react'
import Carhero from '../Components/Carcomp/CarHero/Carhero';
import Horizontal from '../Components/Carcomp/Horizontal/Horizontal';
import Showing from '../Components/Carcomp/Products/showing';

 const Car = () => {
  return (
    <div className='Car'>
        <Carhero/>
        <Horizontal/>
        <Showing/>
    </div>
  )
}

export default Car;