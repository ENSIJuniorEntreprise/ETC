import React, { useState } from 'react';
import './activities.css'
import act1 from './assets/act1.png'
import act2 from './assets/act2.png'
import act3 from './assets/act3.png'
import act1w from './assets/act1w.png'
import act2w from './assets/act2w.png'
import act3w from './assets/act3w.png'
function Activities(){
    const [hovered, setHovered] = useState(null);
    return(
        <>
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
                    <img src={hovered === 'act2' ? act2 : hovered === 'act3' ? act3 : act1} /><br/>
                    <h3>{hovered === 'act2' ? 'Evènementiel' : hovered === 'act3' ? 'Développement des ressources humaines' : 'Projet'}</h3><br/>
                    <div className='line1'></div><br/>
                    <p>{hovered === 'act3' ? 'Développement des ressources humaines ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.' : hovered === 'act2' ? 'Evénementiel ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.' : 'Projet ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.'}</p>
                </div>
            </div>
        </>
    );
}
export default Activities;