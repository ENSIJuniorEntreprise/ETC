import React, { useState, useEffect } from 'react';
import './About.css'
import rectangle1 from './assets/Rectangle1.png'
import rectangle2 from './assets/rectangle2.png'
import rectangle3 from './assets/rectangle3.png'
import rectangle81 from './assets/Rectangle 81.png'
import rectangle69 from './assets/Rectangle 69.png'
import rectangle147 from './assets/Rectangle 147.png'
import pic3 from './assets/passionne.png'
import pic4 from './assets/meilleur-entrainement.png'
import pic5 from './assets/innovation.png'
import act1 from './assets/act1.png'
import act2 from './assets/act2.png'
import act3 from './assets/act3.png'
import act1w from './assets/act1w.png'
import act2w from './assets/act2w.png'
import act3w from './assets/act3w.png'
import c1 from './assets/circle1.png'
import c2 from './assets/circle2.png'



function About(){
    
    const [hovered, setHovered] = useState(null);
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
           <h2 style={{ fontFamily: 'roboto' }}>Nos activités</h2>
           <div className='nosactivities'>
           <div className='activities'>
                <div className='act1' onMouseEnter={() => setHovered('act1')} onMouseLeave={() => setHovered(null)}>
                <img 
                src={hovered === 'act2' || hovered === 'act3' ? act1 : act1w} 
                style={{ backgroundColor: (hovered === 'act1' && act1w) || (!hovered && act1w) ? '#16A2C5' : 'transparent' }} 
                />
                </div>

                <div className='act2' onMouseEnter={() => setHovered('act2')} onMouseLeave={() => setHovered(null)}>
                <img src={hovered === 'act2' ? act2w : act2} />
                </div>
                <div className='act3' onMouseEnter={() => setHovered('act3')} onMouseLeave={() => setHovered(null)}>
                <img src={hovered === 'act3' ? act3w : act3} />
                </div>
            </div>
                <div className='description'>
                    <img src={hovered === 'act2' ? act2 : hovered === 'act3' ? act3 : act1} />
                    <h3>{hovered === 'act2' ? 'Evènementiel' : hovered === 'act3' ? 'Communication' : 'Projet'}</h3>
                    <div className='line1'></div>
                    <p>{hovered === 'act3' ? 'Communication ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.' : hovered === 'act2' ? 'Evénementiel ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.' : 'Projet ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.'}</p>
                </div>
            </div>
           <br/><br/><br/><br/><br/>
        </>
    );
}
export default About;