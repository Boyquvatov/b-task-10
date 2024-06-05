import React from "react";
import { Carousel } from "antd";

import "./carousel.css";
const AppCarousel = ({images}) => {
  
  return (
    <>
      <Carousel autoplay arrows>
        {images.map((item, index) => (
          <div className="carousel-card" key={index}>
            <img src={item} alt="tesla" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default AppCarousel;
