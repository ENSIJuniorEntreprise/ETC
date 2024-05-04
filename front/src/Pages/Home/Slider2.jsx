import React from 'react';
import slider2 from './assets/image1.png'
import Sliderstyle from './Slider2.module.css'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from './Slider1';


function AutoPlayyy() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    arrows: false
  };
    return (
      <div className={Sliderstyle.container}>
        <Slider {...settings}>
          {/* <div className={Sliderstyle.container1}>
            <h3>1</h3>
            <img src={slider2}  className={Sliderstyle.Image}></img>
          </div> */}
          <div className={Sliderstyle.container1}>
            
            
            <img src={slider2}></img>
          </div>
          <div className={Sliderstyle.container1}>
            
            <img src={slider2}></img>
          </div>
          <div className={Sliderstyle.container1}>
           
            <img src={slider2}></img>
          </div>
          <div className={Sliderstyle.container1}>
            
            <img src={slider2}></img>
          </div>
         
        </Slider>
      </div>
    );
  }
  
  export default AutoPlayyy;