import React from 'react';
import Position from './Position';
import style from './bureau.module.css';
import rectangle81 from './assets/Rectangle 81.png';

const members = [
    { imgSrc: rectangle81, firstName: 'Mohamed Islam', lastName: 'Sakouhi', title: 'Président' },
    { imgSrc: rectangle81, firstName: 'Sofiene', lastName: 'Trabelsi', title: 'Vice-Président' },
    { imgSrc: rectangle81, firstName: 'Emna', lastName: 'Aissaoui', title: 'Trésorier' },
    { imgSrc: rectangle81, firstName: 'Mouna', lastName: 'Hachicha', title: 'Secrétaire générale' },
    { imgSrc: rectangle81, firstName: 'Iyadh', lastName: 'Gharbi', title: 'Directrice des ressources humaines' },
    { imgSrc: rectangle81, firstName: 'Selim', lastName: 'Ketata', title: 'Responsable Projet' },
    { imgSrc: rectangle81, firstName: 'Emna', lastName: 'Aissaoui', title: 'Responsable Développement Commercial' },
    { imgSrc: rectangle81, firstName: 'Maissa', lastName: 'El Hamdi', title: 'Responsable Marketing' },
];

function Bureau() {
    return (
        <>
            <div className={style.containerb}>
                <div className={style.positionBEX}>
                    {members.map((member, index) => (
                        <Position key={index} {...member} />
                    ))}
                </div>
            </div>

        </>
    );
}

export default Bureau;
