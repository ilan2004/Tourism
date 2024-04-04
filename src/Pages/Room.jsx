import React from 'react'
import BookHero from '../Components/Bookcomp/Hero/Hero';
import Options from '../Components/Bookcomp/Options/Options';
import Curve from '../Components/Layout/Curve';
import Transition from '../Components/Transition/Transition';
import Stairs from '../Components/Layout/Stairs';
import Details from '../Components/Bookcomp/Details/Details';
const Room = () => {
  return (
    <>
  <Stairs>
    <div className='Room'>
    
        <BookHero/>
        <Details/>
        <Options/>
        
    </div>
    </Stairs>
 
    </>
  )
}
export default Room;