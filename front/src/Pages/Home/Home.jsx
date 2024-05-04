import React from 'react';
import './Home.css';
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
import image6 from './assets/image6.png'
import Slider3 from './Slider3.jsx'



function Home() {
  return (
     <div className='Home'>
          <Slider1></Slider1>
    //   <br></br>
    //   <br></br>
    //    
     
       <Boxes></Boxes>
       <br></br>
      <br></br>   
      <Text title="Nos Services" paragraphe="En tant que junior entreprise, nos engagements reposent sur des valeurs fondamentales qui guident chacune de nos actions."></Text>
       <br></br>
//       <br></br> 
       <div className='cardcont'>
//         <Card source={image2} title="Système embarqué" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."></Card>
//         <Card source={image2} title="Système embarqué" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."></Card>
//       </div>
      <br></br> 
       <br></br> 
//       <Text title="Nos Engagement" paragraphe="En tant que junior entreprise, nos engagements reposent sur des valeurs fondamentales qui guident chacune de nos actions."></Text>
//       <br></br>
//       <br></br> 
//       <div className='hor1'> 
//         <Horizentalcard source={image3} titre="Responsabilité sociétale des entreprises" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit
// Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum."></Horizentalcard>
           <button className='readbutton'>Read More</button>
//       </div>
//       <br></br>
//       <br></br>
//       <div className='hor2'>
//         <Horizentalcard source={image4} titre="Qualité" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit
// Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum." ></Horizentalcard>
//       </div>

//       <br></br>
//       <br></br>
//       <div className='hor3'>
//         <Horizentalcard source={image5} titre="Mouvement" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit
// Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum." ></Horizentalcard>
//       </div> 
 

 

        // <div className='cont'>
      //   <Slider2></Slider2>
      // </div>
      // <Text title="Actualité" paragraphe="En tant que junior entreprise, nos engagements reposent sur des valeurs fondamentales qui guident chacune de nos actions."></Text>
      // <br></br>
      // <br></br>
      // <br></br>
      // <br></br> 
      // <div className='card2container'>
      //   <Card2 titre="Les énergies renouvelables : un avenir prometteur" date="11-06-2024"></Card2>
      //   <Card2 titre="Forum Annuel de l’ENSTAB organisé par l’ETC" date="11-06-2024"></Card2>
      //   <Card2 titre="Les énergies renouvelables : un avenir prometteur" date="11-06-2024"></Card2>
      // </div>
       // <br></br>
      // <br></br>
      // <br></br>
      // <br></br>
      // <Text title="Nos Partenaires" paragraphe="En tant que junior entreprise, nos engagements reposent sur des valeurs fondamentales qui guident chacune de nos actions."></Text>
      // <br></br>
      // <div className='cont2'>
      //   <Slider3></Slider3>
      // </div>      

  

 
  
 




    </div>
  );
}

export default Home;
