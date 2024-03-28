import React from 'react'
import './Hero.css'
import main from '../../../assets/main1.mp4'
const Hero = () => {
  return (
    <div className='Hero'>
        <video autoPlay loop muted className='back'>
            <source src={main} type="video/mp4" />
        </video>
    <div class="content"><h1>WHETRIP</h1>
      <a class ="explore"href="C:\Users\ILAN\Desktop\WHETRIP\second\slide.html">Explore</a>
     </div>


    </div>
  )
}
export default Hero;