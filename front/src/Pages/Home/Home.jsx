import React, { useState, useEffect } from 'react';
import style from './Home.module.css'; 
import Slider1 from './Slider1.jsx'
import Button from 'react-bootstrap/Button';
import Box from './Box.jsx'
import Boxes from './Boxes.jsx'
import Text from './Text.jsx'
import Card from './Card.jsx'
import image2 from './assets/card.png'
import Horizentalcard from './Horizentalcard.jsx';
import image3 from './assets/image2.png'
import image4 from './assets/image3.png'
import image5 from './assets/image4.png'
import Slider2 from './Slider2.jsx'
import Card2 from './Card2.jsx';
import Slider3 from './Slider3.jsx'
import img from "./assets/slideHome.jpg"
import pdf from "./../../Assets/example.pdf";
import energie from '../../Assets/07fb903e3e6b09836e785751965c929f.jpg'
import earth from '../../Assets/caf3c301159efe854de8c9f96f1329c0.jpg'
import conference from '../../Assets/e9a34ff59039d046844b58cf3e6ef1a0.jpg'
import Adssegment from '../../Components/Adssegment/Adssegment';
import axios from 'axios';  // Import Axios for making HTTP requests


function Home() {
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    const fetchRecentArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/articles');
        const sortedArticles = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        const recentArticles = sortedArticles.slice(0, 3);
        setRecentArticles(recentArticles);
      } catch (error) {
        console.error('Error fetching recent articles:', error);
        // Handle error or set default/mocked data
      }
    };
  
    fetchRecentArticles();
  }, []);
  

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  let imagesSlider = [energie, conference, earth];

  return (
    <div className={style.Home}>
      <Slider1></Slider1>
      <br></br>
      <br></br>
      <Boxes></Boxes>
      <br></br>
      <br></br>   
      <Text title="Nos Services" paragraphe="En tant que junior entreprise, nos engagements reposent sur des valeurs fondamentales qui guident chacune de nos actions."></Text>
      <br></br>
      <br></br> 
      <div className={style.cardcont}>
        <Card source={image2} title="Système embarqué" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."></Card>
        <Card source={image2} title="Système énergétique" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."></Card>
      </div>
      <br></br> 
      <br></br> 
      <Text title="Nos Engagement" paragraphe="En tant que junior entreprise, nos engagements reposent sur des valeurs fondamentales qui guident chacune de nos actions."></Text>
      <br></br>
      <br></br> 
      <div className={style.sectionEngagement}>
        <div className={style.hor1}> 
          <Horizentalcard source={image3} titre="Responsabilité sociétale des entreprises" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit
          Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum." pdf={pdf}></Horizentalcard>
        </div>
        <div className={style.hor2}>
          <Horizentalcard source={image4} titre="Qualité" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit
          Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum." pdf={pdf}></Horizentalcard>
        </div>
        <div className={style.hor3}>
          <Horizentalcard source={image5} titre="Mouvement" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit
          Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum."></Horizentalcard>
        </div> 
      </div>
      <div className={style.cont}>
        <Adssegment images={imagesSlider}></Adssegment>
      </div>
      <Text title="Actualité" paragraphe="En tant que junior entreprise, nos engagements reposent sur des valeurs fondamentales qui guident chacune de nos actions."></Text>
      <br></br>
      <br></br> 
      <div className={style.card2container}>
        {recentArticles.map((article, index) => (
        <Card2 key={index} article={article} />
      ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br> 
      <Text title="Nos Partenaires" paragraphe="En tant que junior entreprise, nos engagements reposent sur des valeurs fondamentales qui guident chacune de nos actions."></Text>
      <br></br>
      <div className={style.cont2}>
        <Slider3></Slider3>
      </div>      
    </div>
  );
}

export default Home;
