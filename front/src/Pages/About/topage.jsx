import React  from 'react';
import './topage.css'
import rectangle1 from './assets/Rectangle1.png'
import rectangle69 from './assets/Rectangle 69.png'
function Topage(){
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
        </>
    );
}
export default Topage;