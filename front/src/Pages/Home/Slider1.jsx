import React from 'react';
import image1 from './assets/image1.png';
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
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className={Sliderstyle.Container5}>
      <div className={Sliderstyle.Container1}>
        <Slider {...settings}>
          {/* Slider items */}
          <div className={Sliderstyle.Container}>
            <img src={image1} className={Sliderstyle.Image} alt="" />
          </div>
          <div className={Sliderstyle.Container}>
            <img src={image1} className={Sliderstyle.Image} alt="" />
          </div>
          <div className={Sliderstyle.Container}>
            <img src={image1} className={Sliderstyle.Image} alt="" />
          </div>
          {/* Repeat for other slides as necessary */}
        </Slider>
        {/* Apply the 'logo' className to your logo img tag */}
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