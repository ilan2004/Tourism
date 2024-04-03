import React from 'react'
import kodais from '../../../assets/5.mp4'
import './Kodai.css'
 const Kodai = () => {
  return (
    <div className='Kodai'>
        <div className="var">
        <video playsInline autoPlay loop muted className='woods'>
                  <source src ={kodais} type="video/mp4"/>
                </video>
        </div>
    <div className="allcontent">
        <div className="kodaitext">
            <h2>
                Tamil Nadu
            </h2>
        <h1>
            KODAIKANAL
        </h1>
        </div>
        <div className="box">
            <div className="inside">
                <h3>
                    DAY 1
                </h3>
                <p>On day one we will go for boating which is a very famous thing in KODAIKANAL
                    so if you come to here it is a must . it is a very different and special experience
                </p>
            </div>
            <div className="inside">
                <h3>
                    DAY 2
                </h3>
                <p>On day one we will go for boating which is a very famous thing in KODAIKANAL
                    so if you come to here it is a must . it is a very different and special experience
                </p>
            </div>
            <div className="inside">
                <h3>
                    DAY 3
                </h3>
                <p>On day one we will go for boating which is a very famous thing in KODAIKANAL
                    so if you come to here it is a must . it is a very different and special experience
                </p>
            </div>

        </div>
        
    </div>

    </div>
  )
}

export default Kodai;