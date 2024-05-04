import style from './Horizentalcard.module.css'
import React from 'react';


function Horizentalcard(props){
    return(
        <div className={style.container1}>
            <div className={style.image}><img src={props.source}></img></div>
            <div className={style.container2}>
               <div className={style.verticale}></div>
               <div>
                  <h3 className={style.titre}>{props.titre}</h3>
                  <div className={style.horizental}></div>
                  <p className={style.para}>{props.paragraphe}</p>
               </div>

            </div>





        </div>
    )
}
export default Horizentalcard