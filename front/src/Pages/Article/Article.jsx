import './Article.css';
import logo from '../../Assets/4ee934befba8ca8b00dd73de6c38b560.png';
import Article2 from './components/article2/article2';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation to access props passed from previous page
import image from "./../../Assets/07fb903e3e6b09836e785751965c929f.jpg";

function Article() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Define content paragraphs based on received props or default content
  let content = state ? state.description : "Default article content...";

  // Split content into paragraphs based on '**' delimiter
  const paragraphs = content.split('**').map((paragraph, index) => (
    <span key={index}>
      {paragraph.trim()}
      <br />
      <br />
    </span>
  ));

  return (
    <>
      <div className="Articledivpic" style={{ backgroundImage: `url(${state ? state.src : image})` }}>
      </div>
      <div className="Articleflex">
        <div className="Articlebox">
          {/* Display article title received from props or default */}
          <h1>{state ? state.titre : "Article Title"}</h1>
        </div>
        <div id='art22'>
          {/* Display article date received from props or default */}
          <p id='date'>{state ? state.date : "Date"}</p>
          {/* Display article content paragraphs */}
          <p className='art220'>{paragraphs}</p>
        </div>
      </div>
      <button id='art23' onClick={handleBack}>Retour</button>
    </>
  );
}

export default Article;
