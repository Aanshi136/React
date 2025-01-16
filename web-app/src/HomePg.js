import React, { useRef } from "react";
import Slider from "react-slick";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import "./HomePg.css";


const HomePg = () => {
  const sliderRef = useRef(null); 

  const images = [img1, img2, img3, img4, img5];

  
  const PrevArrow = () => (
    <button
      className="custom-arrow prev-arrow"
      onClick={() => sliderRef.current.slickPrev()} 
    >
      {"<"}
    </button>
  );

  const NextArrow = () => (
    <button
      className="custom-arrow next-arrow"
      onClick={() => sliderRef.current.slickNext()} 
    >
      {">"}
    </button>
  );

  const settings = {
    autoplay: false,    
    arrows: true,       
    prevArrow: <PrevArrow />,  
    nextArrow: <NextArrow />,  
    dots: false,       
    infinite: true,     
    centerMode: true,  
    centerPadding: 0, 
    focusOnSelect: true 
  };

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
      <div className="text-container">
      <h1 >Welcome to Laxmi Vilas Palace, Vadodara, India</h1>
      <h2>Laxmi Vilas Palace</h2>
      <p>The Kingdom of Bharatpur was carved out by the legendary Jat warriors, Badan Singh and Suraj Mal. Under their able leadership the territory of Bharatpur expanded far beyond the original boundaries of the town of Bharatpur and the Jats became a power to be reckoned with in this region. Such was the might of the Jats that Bharatpur came to be known as the impregnable city.<br /><br  />

      The forces of Bharatpur were the only ones which fought successfully against the British. In the unsuccessful siege of the Lohagarh fort, the British forces led by Lord Lake suffered heavy casualties and Lord Lake himself was killed. At Deeg, the Bharatpur Maharaja's men successfully took on the might of combined Mughal and Maratha army of 80,000.<br /> Growing from strength to strength, the Jats even attacked and captured the Red Fort in Delhi, the ultimate seat of Power! Set amongst a sprawling 50 acres, the Laxmi Vilas Palace Heritage Hotel was built in 1857 for Raja Raghunath Singh, the younger brother of then ruler of Bharatpur, Maharaja Ram Singh son of Maharaja Jaswant Singh.<br /><br />

      An eclectic and lively fusion of Rajput and Mughal architecture, the place was earlier called Raghunath Niwas, though the locals always preferred to call it Kakaji Ki Kothi.</p>
      <button>BOOK ONLINE</button>
      </div>
    </div>
  );
};

export default HomePg;
