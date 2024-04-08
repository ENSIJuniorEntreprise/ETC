import React  from 'react';
import './secondpart.css'
import rectangle2 from './assets/rectangle2.png'
import rectangle3 from './assets/rectangle3.png'
function Secondpart(){
    return(
        <>
           <div className='vispic'>
                <div className='recpic'>
                    <div className='rect2'><img src={rectangle2} alt="" /></div>
                </div>
                <div className='text'>
                    <br/><br/>
                    <h1 style={{ fontFamily: 'roboto' }}>Notre vision</h1>
                    <br/><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore .</p>
                </div>
           </div>
           <br/><br/><br/>
           <div className='vispic'>
                <div className='text2'>
                    <br/><br/>
                    <h1 style={{ fontFamily: 'roboto' }}>Notre mission</h1>
                    <br/><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore .</p>
                </div>
                <div className='recpic2'>
                    <div className='rect3'><img src={rectangle3} alt="" /></div>
                </div>
           </div>
        </>
    );
}
export default Secondpart;