import "./ArticleNews.css";
import { useNavigate } from 'react-router-dom';

export default function ArticleNews(props) {
  let { src, titre, date, description } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Optional: Smooth scrolling behavior
    });   
    // Navigate to /article route with props
    navigate('/article', { state: { src, titre, date, description } });
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='articlenews'>
      <img src={src} alt={titre} />
      <div>
        <h2>{titre}</h2>
        <hr />
        <h3>{formatDate(date)}</h3>
        <p>{description}</p>
        <div className="btncontainer">
          <button onClick={handleNavigate}>Voir plus &gt;</button>
        </div>
      </div>
    </div>
  );
}
