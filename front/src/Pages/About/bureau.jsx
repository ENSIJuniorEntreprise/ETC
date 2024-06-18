import React from 'react';
import Position from './Position';
import style from './bureau.module.css';
import rectangle81 from './assets/Rectangle 81.png';

const members = [
    { imgSrc: rectangle81, firstName: 'Mohamed Islam', lastName: 'Sakouhi', title: 'Président' },
    { imgSrc: rectangle81, firstName: 'Islam', lastName: 'Sakouhi', title: 'Vice-Président' },
    { imgSrc: rectangle81, firstName: 'Islam', lastName: 'Sakouhi', title: 'Trésorier' },
    { imgSrc: rectangle81, firstName: 'Islam', lastName: 'Sakouhi', title: 'Secrétaire générale' },
    { imgSrc: rectangle81, firstName: 'Islam', lastName: 'Sakouhi', title: 'Directrice des ressources humaines' },
    { imgSrc: rectangle81, firstName: 'Islam', lastName: 'Sakouhi', title: 'Responsable Projet' },
    { imgSrc: rectangle81, firstName: 'Islam', lastName: 'Sakouhi', title: 'Responsable Développement Commercial' },
    { imgSrc: rectangle81, firstName: 'Islam', lastName: 'Sakouhi', title: 'Responsable Marketing' },
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
