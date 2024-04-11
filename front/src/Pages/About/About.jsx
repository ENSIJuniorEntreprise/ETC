import React, { useState, useEffect } from 'react';
import './About.css'
import rectangle147 from './assets/Rectangle 147.png'
import c1 from './assets/circle1.png'
import c2 from './assets/circle2.png'
import Topage from './topage';
import Secondpart from './secondpart';
import Thirdpart from './thirdpart';
import Activities from './activities';
import Bureau from './bureau';

function About(){
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
        <div className='container'>
            <Topage/><br/>
            <Secondpart/>
            <h2 style={{ fontFamily: 'roboto' }}>Nos Valeurs</h2>
           <Thirdpart/>
           <h2 style={{ fontFamily: 'roboto' }}>Nos activités</h2>
           <Activities/>
           <h2 style={{ fontFamily: 'roboto' }}>Bureau éxécutif</h2>
           <Bureau/>
           <h2 style={{ fontFamily: 'roboto' }}>Galeries</h2>
           <div className='slidg'>
           <div className='galerryslider'>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                    />
                ))}
            </div>
            <div className='ponct'>
            {images.map((_, index) => (
            <img
            key={index}
            src={index === currentImageIndex ? c2 : c1}
            alt={`Circle ${index + 1}`}
            />
            ))}
            </div>
            </div>
        </div>
            
        </>
    );
}
export default About;