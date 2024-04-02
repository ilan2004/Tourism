import React from 'react';
import './MobileCard.css';
const MobileCard = ({ card_title,card_des,room_img,redirect}) => {
  return (
    <div className='MobileCard'>
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={room_img} alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">26 December 2019</span>
              <div className="blog-slider__title">{card_title}</div>
              <div className="blog-slider__text">{card_des}</div>
              <div className="buttons">
              <a href={redirect} className="blog-slider__button_vr">VIEW IN VR</a>
              <a href={redirect} className="blog-slider__button">SEE MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileCard;
