import Cardstyle from './Card.module.css'
import React from 'react';


function Card(props){
    return (
        <div className={Cardstyle.container}>
            <img src={props.source} className={Cardstyle.Image}></img>
            <h3 className={Cardstyle.titre}>{props.title}</h3>
            <p className={Cardstyle.para}>{props.paragraphe}</p>
            <button className={Cardstyle.Bouton}>Voir plus </button>
        </div>
    )
}
export default Card