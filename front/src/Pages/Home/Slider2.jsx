import React from 'react';
import slider2 from './assets/image1.png';
import Sliderstyle from './Slider2.module.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlayyy() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false
  };

  // Liste d'images
  const images = [
    slider2,
    slider2,
    slider2,
    slider2,
    slider2
  ];

  return (
    <div className={Sliderstyle.container}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={Sliderstyle.container1}>
            <img src={image} className={Sliderstyle.Image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlayyy;
