import React from 'react'
import '../css/Card.css';
const Card = ({video,tag}) => {
  return (
    <div className='Card'>
        <div class="portfolio-thumb">
          <video   autoPlay loop muted className="img-responsive" alt="portfolio video">
             <source src={video} type="video/mp4" />
          </video>
          <div class="portfolio-overlay">
            <h4>{tag}</h4>
          </div>
    </div>
</div>
  );
};

export default Card;
