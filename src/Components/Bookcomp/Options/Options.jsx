import React from 'react';
import Rooms from './BookCard/Rooms';
import BookCard from './BookCard/BookCard';
import './Options.css'
import MobileCard from './MobileCard/MobileCard';
const Options = () => {
  return (
    <div className="Options">
      <div className="desktop">
      {Rooms.map((item, index) => (
        <BookCard
          key={index}
          card_title={item.card_title}  
          card_des={item.card_des} 
          room_img={item.room_img}
          redirect={item.redirect}
        />
      ))}
      </div>
      <div className="mobile">
      {Rooms.map((item, index) => (
        <MobileCard
          key={index}
          card_title={item.card_title}  
          card_des={item.card_des} 
          room_img={item.room_img}
          redirect={item.redirect}
        />
      ))}
      </div>
    </div>
  );
};

export default Options;