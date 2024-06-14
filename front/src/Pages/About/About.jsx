import React from 'react';
import style from './About.module.css'
import Topage from './topage';
import MissionVision from './MissionVision';
import Values from './Values';
import Activities from './activities';
import Bureau from './bureau';
import Galleries from './Galleries';

function About(){
    return(
        <>
        <div className={style.container}>
            <Topage/>
            <MissionVision/>
            <Values/>
           <h2 style={{ fontFamily: 'roboto' }}>Nos activités</h2>
            <Activities/>
           <h2 style={{ fontFamily: 'roboto' }}>Bureau éxécutif</h2>
           <Bureau/>
             <h2 style={{ fontFamily: 'roboto' }}>Galeries</h2>
            <Galleries/>
        </div>
            
        </>
    );
}
export default About;