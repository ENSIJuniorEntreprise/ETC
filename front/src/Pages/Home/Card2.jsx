import style from './Card2.module.css'
import React from 'react';



function Card2(props){
    
        return (
            <div className={style.cardcontainer}>
             
              <div className={style.cardcontent}>
                <h2 className={style.titre}>{props.titre}</h2>
               
                <div className={style.cardbutton} >
                  <button className={style.buton}>Voir plus {">"} </button> 
                  <p className={style.carddate}>{props.date}</p>
                
                </div>
              </div>
            </div>
          );
}
export default Card2