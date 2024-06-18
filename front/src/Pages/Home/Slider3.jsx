import React from 'react';
import slider3 from './assets/image1.png';
import slider2 from './assets/image2.png';

import style from './Slider3.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageList = [
  { id: 1, src: slider3 },
  { id: 2, src: slider2 },
  { id: 3, src: slider3 },
  { id: 4, src: slider3 },
  { id: 5, src: slider3 },
  { id: 6, src: slider3 },
  { id: 7, src: slider3 },
  { id: 8, src: slider3 },
  { id: 9, src: slider3 }
];

function MultipleItems() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,  
        pauseOnHover: false,
        autoplaySpeed: 10000,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <div className={style.slidercontainer}>
            <Slider {...settings}>
                {imageList.map(image => (
                    <div key={image.id} className={style.slidercontainer2}>
                        <img src={image.src} className={style.im} alt={`slider${image.id}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MultipleItems;
