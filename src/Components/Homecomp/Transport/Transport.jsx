import React from 'react';
import Fly from './List';
import Carding from './Card';

const Transport = () => {
  return (
    <div className="Transport">
      {Fly.map((item, index) => (
        <Carding
          key={index}
          Head={item.Head}  
          House={item.House} 
          Vehicle={item.Vehicle} 
        />
      ))}
    </div>
  );
};

export default Transport;