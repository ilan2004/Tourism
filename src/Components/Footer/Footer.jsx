import React from 'react'
import logo from '../../assets/logo.png'
import copyright from '../../assets/copyright.png'
 import './Footer.css'
const Footer = () => {
  return (

    <div className='Footer'>
        <label class="mit">
              <img className='foot-log' src={logo}
              width="60px"
              height="60px"/>
              <p class="label">
              WHETRIP</p>
              </label>
            <div class="layout">
              All credits reserved 
            <img src={copyright} width="20" height="20"/>
                
            </div>
        </div>
  )
}


export default Footer;
