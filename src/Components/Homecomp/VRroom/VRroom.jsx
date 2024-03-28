import React from 'react'
import './VRroom.css'
import Vrroomimg from '../../../assets/vrroom.png';
 const VRroom = () => {
  return (
    <div className='VRroom'>
        <div className="hire">
            <h1 className='h11'>
                Book Rooms Through VR
            </h1>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, in natus quibusdam quos reprehenderit laudantium adipisci veniam, expedita magni, iure perspiciatis. Quam praesentium iste sunt ex, laborum laboriosam impedit quo.
            </p>
            <button className='see'>
                <a >
                    See More
                </a>
            </button>
        </div>
    <img className='Vrimg' src={Vrroomimg} />
    </div>
  )
}

export default VRroom;