import React from 'react';
import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';
import card4 from './card4.jpg';
import card5 from './card5.jpg';
import card6 from './card6.jpg';
import './Service.css';


const Service = () => {
  return (
    <div className="service-container">
      <div className="card">
        <div className="card-image">
          <img src={card1} alt="Card 1" />
        </div>
        <button className="btn">Know More</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img src={card2} alt="Card 2" />
        </div>
        <button className="btn">Know More</button>
      </div>
       <div className="card">
        <div className="card-image">
          <img src={card3} alt="Card 3" />
        </div>
        <button className="btn">Know More</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img src={card4} alt="Card 4" />
        </div>
        <button className="btn">Know More</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img src={card5} alt="Card 5" />
        </div>
        <button className="btn">Know More</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img src={card6} alt="Card 6" />
        </div>
        <button className="btn">Know More</button>
      </div> 
    </div>
  );
};

export default Service;
