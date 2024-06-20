import './News.css';
import logo from '../../Assets/4ee934befba8ca8b00dd73de6c38b560.png';
import ArticleNews from '../../Components/ArticleNews/ArticleNews';
import Adssegment from '../../Components/Adssegment/Adssegment';
import { useState, useEffect } from 'react';
import energie from '../../Assets/07fb903e3e6b09836e785751965c929f.jpg';
import earth from '../../Assets/caf3c301159efe854de8c9f96f1329c0.jpg';
import conference from '../../Assets/e9a34ff59039d046844b58cf3e6ef1a0.jpg';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';

function style(x, y) {
  return x === y
    ? {
        background: '#16A2C5',
        cursor: 'default',
      }
    : {
        background: '#011E4A',
        cursor: 'pointer',
      };
}

function styleArrows(x, y) {
  return x === y
    ? {
        background: '#16A2C5',
        cursor: 'default',
        color: '#011E4A',
      }
    : {
        background: '#011E4A',
        cursor: 'pointer',
        color: '#16A2C5',
      };
}

function News() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); // Loader state
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true); // Start loader
    try {
      const response = await axios.get('http://localhost:8000/api/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles :', error);
    }
    setLoading(false); // Stop loader
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const currentArticles = articles.slice(articlesPerPage * (page - 1), articlesPerPage * page);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="Newsdivpic">
            <div>
              <img className="Newslogo" src={logo} alt="logo" />
            </div>
          </div>
          <div className="Newsflex">
            <div className="Newsbox">
              <h1>Nos événements & actualités</h1>
              <div />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci magnam debitis voluptate reprehenderit
                impedit commodi quaerat soluta at a dolores, incidunt labore quas unde molestiae natus similique maiores
                facilis id. incidunt labore quas unde molestiae natus similique maiores facilis id.
              </p>
            </div>
          </div>

          <div id="flex">
            <Adssegment images={imagesSlider}></Adssegment>
            <div id="curated">
              {currentArticles.map((article, i) => (
                <ArticleNews key={article._id} src={article.image} titre={article.titre} date={formatDate(article.datePublication)} description={article.description}></ArticleNews>
              ))}
              <div id="scrolarticles">
                <p
                  style={styleArrows(page, 1)}
                  onClick={() => {
                    if (page > 1) setPage((page) => page - 1);
                  }}
                >
                  <span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}>&#10140;</span>
                </p>
                <div id="numbers">
                  {pageNumbers.map((num) => (
                    <p
                      key={num}
                      style={style(page, num)}
                      onClick={() => {
                        if (page !== num) setPage(num);
                      }}
                    >
                      {num}
                    </p>
                  ))}
                </div>
                <p
                  style={styleArrows(totalPages, page)}
                  onClick={() => {
                    if (page < totalPages) setPage((page) => page + 1);
                  }}
                >
                  &#10140;
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default News;

const imagesSlider = [energie, conference, earth];
