import React from 'react';
import slider3 from './assets/slider3.png'
import style from './Slider3.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MultipleItems() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 900, // At max-width 900px
          settings: {
            slidesToShow: 2, // Show 2 items
            slidesToScroll: 2, // Scroll 2 items at a time
          },
        },
        {
          breakpoint: 600, // At max-width 600px
          settings: {
            slidesToShow: 1, // Show 1 item
            slidesToScroll: 1, // Scroll 1 item at a time
          },
        },
      ]
    };
   
    return (
      <div className={style.slidercontainer}>
        <Slider {...settings}>
          <div className={style.slidercontainer2}>
            
            <img src={slider3} className={style.im} ></img>
          </div>
          <div className={style.slidercontainer2}>
            
            <img src={slider3} className={style.im}></img>
          </div>
          <div className={style.slidercontainer2}>
            
            <img src={slider3} className={style.im}></img>
          </div>
          <div className={style.slidercontainer2}>
            
            <img src={slider3} className={style.im}></img>
          </div>
          <div className={style.slidercontainer2}>
            
            <img src={slider3} className={style.im}></img>
          </div>
          <div className={style.slidercontainer2}>
           
            <img src={slider3} className={style.im}></img>
          </div>
          <div className={style.slidercontainer2}>
         
            <img src={slider3} className={style.im}></img>
          </div>
          <div className={style.slidercontainer2}>
            
            <img src={slider3} className={style.im}></img>
          </div>
          <div className={style.slidercontainer2}>
           
            <img src={slider3} className={style.im}></img>
          </div>
        </Slider>
      </div>
    );
  }
  
  export default MultipleItems;