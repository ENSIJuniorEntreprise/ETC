import React, { useState, useEffect } from 'react';
import './About.css'
import rectangle1 from './assets/Rectangle1.png'
import rectangle2 from './assets/rectangle2.png'
import rectangle3 from './assets/rectangle3.png'
import rectangle69 from './assets/Rectangle 69.png'
import rectangle147 from './assets/Rectangle 147.png'
import pic3 from './assets/passionne.png'
import pic4 from './assets/meilleur-entrainement.png'
import pic5 from './assets/innovation.png'



function About(){
    

    return(
        <>
          
          <div className='topp'>
               <img src={rectangle69} />

          </div>
    
          <div className='recapropos'>
               <div className='bg1'>
                    <img src={rectangle1} alt="" />
               </div>
               <h1>A propos</h1>
               <div className='line'></div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div> 
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <div className='vispic'>
                <div className='recpic'>
                    <div className='rect2'><img src={rectangle2} alt="" /></div>
                </div>
                <div className='text'>
                    <h1 style={{ fontFamily: 'roboto' }}>Notre vision</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore .</p>
                </div>
           </div>
           <br/><br/><br/>
           <div className='vispic'>
                <div className='text2'>
                    <h1 style={{ fontFamily: 'roboto' }}>Notre mission</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore .</p>
                </div>
                <div className='recpic2'>
                    <div className='rect3'><img src={rectangle3} alt="" /></div>
                </div>
           </div>
           <br/><br/><br/><br/><br/>
           <h2 style={{ fontFamily: 'roboto' }}>Nos Valeurs</h2>
           <div className='values'>
                <div className='img1'>
                    <img src={pic3} alt="" />
                    <p>Passion</p>
                    <h5 className='addedp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor.</h5>
                </div>
                <div className='img2'>
                    <img src={pic4} alt="" />
                    <p>Excellence</p>
                    <h5 className='addedp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor.</h5>
                </div>
                <div className='img3'>
                    <img src={pic5} alt="" />
                    <p>Innovation</p>
                    <h5 className='addedp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor.</h5>
                </div>
           </div>
           <br/><br/><br/><br/><br/>
           
        </>
    );
}
export default About;