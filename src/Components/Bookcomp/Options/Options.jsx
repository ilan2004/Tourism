import React from 'react';
import Rooms from './BookCard/Rooms';
import BookCard from './BookCard/BookCard';
import './Options.css'
const Options = () => {
  return (
    <div className="Options">
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
  );
};

export default Options;