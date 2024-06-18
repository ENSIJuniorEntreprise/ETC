import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Card2.module.css';

function Card2({ article }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Optional: Smooth scrolling behavior
    });    
    navigate('/article', { state: { src: article.image, titre: article.titre, date: formatDate(article.datePublication), description: article.description } });
  };

  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={style.cardcontainer} style={{ backgroundImage: `url(${article.image})` }}>
      <div className={style.overlay}>
        <div className={style.cardcontent}>
          {/* Content if needed */}
        </div>
        <h2 className={style.titre}>{article.titre}</h2>
        <div className={style.cardbutton}>
          <button className={style.buton} onClick={handleNavigate}>
            Voir plus {'>'}
          </button>
          <p className={style.carddate}>{formatDate(article.datePublication)}</p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
