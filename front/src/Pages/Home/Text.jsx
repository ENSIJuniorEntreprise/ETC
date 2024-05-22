import Textstyle from './Text.module.css'
import React from 'react';


function Text(props){
    return(
        <div className={Textstyle.container}>
            <h2 className={Textstyle.titre}>{props.title}</h2>
            <p className={Textstyle.para}>{props.paragraphe}</p>
        </div>
    )
}
export default Text