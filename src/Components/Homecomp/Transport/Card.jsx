import React from 'react';
import './Transport.css';

const Carding = ({ Vehicle, Head, House }) => {
  return (
    <div className="Cards">
      <div className="info">
        <h3 className='h33'>{Head}</h3>
      </div>
      <div className="house">
        {House}
      </div>
      <span className="plane">
        <img src={Vehicle} width="50" height="50" alt="Vehicle" />
      </span>
    </div>
  );
};

export default Carding;
