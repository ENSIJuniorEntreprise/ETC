import { useEffect, useState } from "react";
import './Adssegment.css'
export default function Adssegment({images}){

      const [currentSlide, setCurrentSlide] = useState(0);
    
      useEffect(() => {
        if (images.length > 0) {
          const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
              prevSlide === images.length - 1 ? 0 : prevSlide + 1
            );
          }, 3000);
          return () => clearInterval(interval);
        }
      }, [images.length]);
    
      const changeSlide = (index) => {
        setCurrentSlide(index);
      };
    
      if (images.length == 0) {
        return <div id="ads"></div>;
      }
    
      return (
        <div>
          <div className="slider">
            {images.map((image, index) => (
              <div
                key={index}
                className={index === currentSlide ? 'slide active' : 'slide'}
              >
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={index === currentSlide ? 'dot active' : 'dot'}
                onClick={() => changeSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      );
    };
  
