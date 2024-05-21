import React from 'react';
import style from './Card2.module.css';

function Card2(props) {
  return (
    <div className={style.cardcontainer} style={{ backgroundImage: `url(${props.image})` }}>
      <div className={style.overlay}>
      <div className={style.cardcontent}>
      </div>
        <h2 className={style.titre}>{props.titre}</h2>
        <div className={style.cardbutton}>
          <button className={style.buton}>Voir plus {">"}</button>
          <p className={style.carddate}>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
