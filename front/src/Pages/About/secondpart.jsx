import React  from 'react';
import style from'./secondpart.module.css'
import rectangle2 from './assets/rectangle2.png'
import rectangle3 from './assets/rectangle3.png'
function Secondpart(){
    return(
        <>
        <div className={style.containervs}>
           <div className={style.vispic}>
                <div className={style.recpic}>
                    <div className={style.rect2}><img src={rectangle2} alt="" /></div>
                </div>
                <div className={style.text}>
                    <h1 style={{ fontFamily: 'roboto' }}>Notre vision</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore .</p>
                </div>
           </div>
           <div className={style.vispic}>
                <div className={style.text2}>
                    <h1 style={{ fontFamily: 'roboto' }}>Notre mission</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore .</p>
                </div>
                <div className={style.recpic2}>
                    <div className={style.rect3}><img src={rectangle3} alt="" /></div>
                </div>
           </div>
           </div>
        </>
    );
}
export default Secondpart;