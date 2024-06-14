import React  from 'react';
import './MissionVision.css'
import rectangle2 from './assets/rectangle2.png'
import rectangle3 from './assets/rectangle3.png'
function MissionVision(){
    return(
        <>
        <div className="containervs">
           <div className="vispic">
                <div className="recpic">
                    <div className="rect2"><img src={rectangle2} alt="" /></div>
                </div>
                <div className="textMission">
                    <h1 style={{ fontFamily: 'roboto' }}>Notre vision</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore do eiusmod tempor 
                         incididunt ut labore..</p>
                </div>
           </div>
           <div className="vispic">
                <div className="text2Vision">
                    <h1 style={{ fontFamily: 'roboto' }}>Notre mission</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore do eiusmod tempor 
                         incididunt ut labore.</p>
                </div>
                <div className="recpic2">
                    <div className="rect3"><img src={rectangle3} alt="" /></div>
                </div>
           </div>
           </div>
        </>
    );
}
export default MissionVision;