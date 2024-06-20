import React from 'react';
import style from './Horizentalcard.module.css';
import { useNavigate } from 'react-router-dom';

function Horizentalcard(props) {
  const navigate = useNavigate();

  const handleVoirPlus = () => {
    navigate('/pdf-viewer', { state: { pdfFile: props.pdf } });
  };

  return (
    <div className={style.container1}>
      <div className={style.image}>
        <img src={props.source} alt={props.titre} />
      </div>
      <div className={style.container2}>
        <div className={style.textContainer}>
          <h3 className={style.titre}>{props.titre}</h3>
          <div className={style.horizental}></div>
          <p className={style.para}>{props.paragraphe}</p>
          {props.pdf && 
            <button onClick={handleVoirPlus} className={style.readbutton}>
              Voir plus
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Horizentalcard;
