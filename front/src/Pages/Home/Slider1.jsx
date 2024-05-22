import React from 'react';
import image1 from './assets/slideHome.jpg';
import Sliderstyle from './Slider.module.css';
import logo from './assets/logo.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    pauseOnHover: false, // Continuer à slider même en hover
  };

  const images = [
    image1,
    image1,
    image1, // Répétez ou ajoutez d'autres images ici
  ];

  return (
    <div className={Sliderstyle.Container5}>
      <Slider {...settings} className={Sliderstyle.Container}>
        {images.map((image, index) => (
          <div key={index} className={Sliderstyle.Slide}>
            <img src={image} className={Sliderstyle.Image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
      <div className={Sliderstyle.Container1}>
        <div className={Sliderstyle.logocont}>
          <img src={logo} className={Sliderstyle.logo} alt="Logo" />
        </div>
        <div className={Sliderstyle.butContainer}>
          <button className={Sliderstyle.bouton}>Nous Contacter</button>
        </div>
      </div>
    </div>
  );
}

export default AutoPlay;
