import React from 'react'
import BookHero from '../Components/Bookcomp/Hero/Hero';
import Options from '../Components/Bookcomp/Options/Options';
import Curve from '../Components/Layout/Curve';
import Transition from '../Components/Transition/Transition';
import Stairs from '../Components/Layout/Stairs';
import Details from '../Components/Bookcomp/Details/Details';
import Navbars from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
const Room = () => {
  return (
    <>
  <Stairs>
    <div className='Room'>
        <Navbars/>
        <BookHero/>
        <Details/>
        <Options/>
        <Footer />
        
    </div>
    </Stairs>
 
    </>
  )
}
export default Room;