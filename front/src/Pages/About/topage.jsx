import React  from 'react';
import './topage.css'
import rectangle69 from './assets/Rectangle 69.png'
function Topage(){
    return(
        <>
            <div className='topp'>
               <img src={rectangle69} />
            </div>
            <div className='parentp'>
            <div className='recapropos'>
               <h1>A propos</h1>
               <div className='line'></div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div> 
            </div>
        </>
    );
}
export default Topage;