import React, { useState, useEffect } from 'react';
import image1 from './assets/slideHome.jpg';
import Sliderstyle from './Slider.module.css';
import logo from './assets/logo.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

function AutoPlay() {
  const navigate = useNavigate();
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleClick = () => {
    // Smoothly scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Wait for the scroll to complete before navigating
    setTimeout(() => {
      navigate("/contact");
    }, 0); // Adjust the delay as needed
  };

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

  useEffect(() => {
    const handleScroll = () => {
      // Calculer la position actuelle du bas de la fenêtre visible
      const bottomPosition = window.innerHeight + window.scrollY;

      // Ajuster cette valeur pour contrôler quand le bouton doit être visible ou non
      const threshold = 100; // Modifier cette valeur selon vos besoins

      // Calculer si le bouton doit être visible ou non
      setIsButtonVisible(bottomPosition < document.body.clientHeight - threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          {isButtonVisible && (
            <button className={Sliderstyle.bouton} onClick={handleClick}>Nous Contacter</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AutoPlay;
