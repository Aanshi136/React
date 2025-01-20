import React from 'react';
import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';
import card4 from './card4.jpg';
import card5 from './card5.jpg';
import card6 from './card6.jpg';
import './Service.css';

const Service = () => {
  const cards = [
    { id: 1, imgSrc: card1, alt: 'Card 1' },
    { id: 2, imgSrc: card2, alt: 'Card 2' },
    { id: 3, imgSrc: card3, alt: 'Card 3' },
    { id: 4, imgSrc: card4, alt: 'Card 4' },
    { id: 5, imgSrc: card5, alt: 'Card 5' },
    { id: 6, imgSrc: card6, alt: 'Card 6' },
  ];

  return (
    <div className="service-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-image">
            <img src={card.imgSrc} alt={card.alt} />
          </div>
          <button className="btn">Know More</button>
        </div>
      ))}
    </div>
  );
};

export default Service;
