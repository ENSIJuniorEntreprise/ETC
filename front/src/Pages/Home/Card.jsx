import Cardstyle from './Card.module.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Card(props){
    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/services', { state: { scrollTo: props.title } });
    };

    return (
        <div className={Cardstyle.container}>
            <img src={props.source} className={Cardstyle.Image}></img>
            <h3 className={Cardstyle.titre}>{props.title}</h3>
            <p className={Cardstyle.para}>{props.paragraphe}</p>
            <button className={Cardstyle.Bouton} onClick={handleNavigate}>Voir plus </button>
        </div>
    )
}
export default Card