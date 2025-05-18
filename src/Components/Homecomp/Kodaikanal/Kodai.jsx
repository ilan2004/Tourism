import React from 'react'
import kodais from '../../../assets/5.mp4'
import './Kodai.css'
 const Kodai = () => {
  return (
    <div className='Kodai'>
        <div className="var">
        <video playsInline autoPlay loop muted className='woods'>
                  <source playsInline src ={kodais} type="video/mp4"/>
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
                <p>Arrive in Kodaikanal and check into your hotel.
                    Visit Coaker's Walk for a refreshing stroll with stunning valley views.
                    Head to Bryant Park, a serene botanical garden near the lake.
                    Enjoy a relaxing boat ride at Kodaikanal Lake.
                </p>
            </div>
            <div className="inside">
                <h3>
                    DAY 2
                </h3>
                <p>Visit the beautiful Pillar Rocks for breathtaking views.
                    Stop by Guna Caves (Devil’s Kitchen) for a touch of mystery and natural beauty.
                    Explore Pine Forest, a perfect spot for photography and relaxation.
                    Visit Moir Point, a fantastic viewpoint.
                </p>
            </div>
            <div className="inside">
                <h3>
                    DAY 3
                </h3>
                <p>Visit Silver Cascade Falls, a picturesque waterfall.
            Explore Bear Shola Falls, a peaceful spot surrounded by nature.

             Have lunch at a local restaurant and check out from your hotel.

                </p>
            </div>

        </div>
        
    </div>

    </div>
  )
}

export default Kodai;