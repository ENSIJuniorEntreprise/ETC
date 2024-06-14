import React, { useState, useEffect } from 'react';
import rectangle147 from './assets/Rectangle 147.png'
import c1 from './assets/circle1.png'
import c2 from './assets/circle2.png'
import style from "./Galleries.module.css"

function Galleries(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [rectangle147, rectangle147, rectangle147, rectangle147, rectangle147];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [images.length]);
    return(
        <>
            <div className={style.slidg}>
            <div className={style.galerryslider}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                    />
                ))}
            </div>
            <div className={style.ponct}>
            {images.map((_, index) => (
            <img
            key={index}
            src={index === currentImageIndex ? c2 : c1}
            alt={`Circle ${index + 1}`}
            />
            ))}
            </div>
            </div>  
        
            
        </>
    );
}
export default Galleries;