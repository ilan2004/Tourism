import React from 'react';
import Available from './Available';
import Products from './Products';
const Showing = () => {
  return (
    <div className="Showing">
      <div className="desktop">
      {Available.map((item, index) => (
        <Products
          key={index}
          card_title={item.card_title}  
          card_des={item.card_des} 
          car_img={item.car_img}
          redirect={item.redirect}
        />
      ))}
      </div>
    </div>
  );
};

export default Showing;