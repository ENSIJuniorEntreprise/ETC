import React from 'react';
import PropTypes from 'prop-types';
import style from './Position.module.css';

const Position = ({ imgSrc, firstName, lastName, title }) => {
    return (
        <div className={style.position}>
            <img src={imgSrc} alt={`${firstName} ${lastName}`} />
            <h5 className={style.nom}>{firstName}{" "}{lastName}</h5>
            <h5 className={style.poste}>{title}</h5>
        </div>
    );
};

Position.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Position;
