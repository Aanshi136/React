import React from 'react';
import palaceImage from './palace.jpg'; 
import './About.css';


function About() {
  return (
    <section>
      <box>
        <h1 className="box_h1">About us</h1>
        <p className="box_p">
        The Lakshmi Vilas Palace, an extravagant building of the Indo-Saracenic school, was built by Maharaja Sayajirao Gaekwad III in 1890 at a cost of GBP180,000. Major Charles Mant was the architect.
        It is reputed to have been the largest private dwelling built till date and four times the size of Buckingham Palace. At the time of construction it boasted the most modern amenities such as elevators and the interior is reminiscent of a large European country house. It remains the residence of the Royal Family, who continue to be held in high esteem by the residents of Baroda.
        Its ornate Darbar Hall, which is sometimes the venue of music concerts and other cultural events, has a Venetian mosaic floor, Belgium stained glass windows and walls with intricate mosaic decorations. Outside of the Darbar Hall is an Italinate courtyard of water fountains. 
        </p>
      </box>
      
      <box2>
        <img 
          src={palaceImage}  
          alt="Vadodara"
          className="box2_image" 
        />
      </box2>
    </section>
  );
}

export default About;



