import React, { useState } from 'react';
import style from './activities.module.css'
import act1 from './assets/act1.png'
import act2 from './assets/act2.png'
import act3 from './assets/act3.png'
import act1w from './assets/act1w.png'
import act2w from './assets/act2w.png'
import act3w from './assets/act3w.png'

function Activities(){
    const [clicked, setClicked] = useState('act1');
    const [hovered, setHovered] = useState('act1');

    const handleClick = (activity) => {
        setClicked(activity);
    };

    return(
        <>
           <div className={style.nosactivities}>
           <div className={style.activities}>
                <div className={style.act1} 
                     onMouseEnter={() => setHovered('act1')} 
                     onMouseLeave={() => setHovered(null)} 
                     onClick={() => handleClick('act1')}>
                    <img 
                        src={(clicked === 'act1' || hovered === 'act1') ? act1w : act1} 
                        style={{ backgroundColor: (clicked === 'act1' && act1w) ? '#16A2C5' : 'transparent' }} 
                    />
                </div>

                <div className={style.act2} 
                     onMouseEnter={() => setHovered('act2')} 
                     onMouseLeave={() => setHovered(null)} 
                     onClick={() => handleClick('act2')}>
                    <img 
                        src={(clicked === 'act2' || hovered === 'act2') ? act2w : act2} 
                        style={{ backgroundColor: (clicked === 'act2' && act2w) ? '#16A2C5' : 'transparent' }} 
                    />
                </div>

                <div className={style.act3} 
                     onMouseEnter={() => setHovered('act3')} 
                     onMouseLeave={() => setHovered(null)} 
                     onClick={() => handleClick('act3')}>
                    <img 
                        src={(clicked === 'act3' || hovered === 'act3') ? act3w : act3} 
                        style={{ backgroundColor: (clicked === 'act3' && act3w) ? '#16A2C5' : 'transparent' }} 
                    />
                </div>
            </div>
                <div className={style.description}>
                    <img src={clicked === 'act2' ? act2 : clicked === 'act3' ? act3 : act1} /><br/>
                    <h3>{clicked === 'act2' ? 'Evènementiel' : clicked === 'act3' ? 'Développement des ressources humaines' : 'Projet'}</h3><br/>
                    <div className={style.line1}></div><br/>
                    <p>{clicked === 'act3' ? 'Développement des ressources humaines ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.' : clicked === 'act2' ? 'Evénementiel ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.' : 'Projet ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.'}</p>
                </div>
            </div>
        </>
    );
}

export default Activities;
