import React from 'react';
import  style from './thirdpart.module.css'
import pic3 from './assets/passionne.png'
import pic4 from './assets/meilleur-entrainement.png'
import pic5 from './assets/innovation.png'
function Thirdpart(){
    return(
        <>
           <div className={style.values}>
                <div className={style.img1}>
                    <img src={pic3} alt="" />
                    <p>Passion</p>
                    <h5 className={style.titlev}>Passion</h5>
                    <h6 className={style.addedp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor.</h6>
                </div>
                <div className={style.img2}>
                    <img src={pic4} alt="" />
                    <p>Excellence</p>
                    <h5 className={style.titlev}>Excellence</h5>
                    <h6 className={style.addedp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor.</h6>
                </div>
                <div className={style.img3}>
                    <img src={pic5} alt="" />
                    <p>Innovation</p>
                    <h5 className={style.titlev}>Innovation</h5>
                    <h6 className={style.addedp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor.</h6>
                </div>
           </div>
        </>
    );
}
export default Thirdpart;