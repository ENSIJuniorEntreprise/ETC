import './News.css';
import conference from '../../assets/e9a34ff59039d046844b58cf3e6ef1a0.jpg'
import energie from '../../assets/07fb903e3e6b09836e785751965c929f.jpg'
import earth from '../../assets/caf3c301159efe854de8c9f96f1329c0.jpg'
import logo from '../../assets/4ee934befba8ca8b00dd73de6c38b560.png'
import ArticleNews from '../../Components/ArticleNews/ArticleNews';
import Adssegment from '../../Components/Adssegment/Adssegment';
import { useState } from 'react';

function style(x, y) {
  return x === y
    ? {
        background: '#16A2C5',
        cursor: 'default'
      }
    : {
        background: '#011E4A',
        cursor: 'pointer'
      };
}
function styleArrows(x,y){
  return x===y    ? {
    background: '#16A2C5',
    cursor: 'default',
    color:'#011E4A'
  }
: {
    background: '#011E4A',
    cursor: 'pointer',
    color:'#16A2C5'
  };
}
function News() {
  let [page,setPage]=useState(1);
  let articles=bigArticles.slice(3*(page-1),3*page)
  return (<>
    <div id='divpic' >
      <div>
      <img id="logo" src={logo} alt="logo"/>
      </div>
    </div>
    <div id="flex">
    <div id="box">
      <h1>Nos événements & actualités</h1>
      <hr />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci magnam debitis voluptate reprehenderit impedit commodi quaerat soluta at a dolores, incidunt labore quas unde molestiae natus similique maiores facilis id.</p>
    </div>
    <Adssegment images={[energie,conference,earth]}></Adssegment>
    <br />
    <div id="curated">
    {articles.map((article,i)=>(
      <ArticleNews key={i} src={article.src} titre={article.titre} date={article.date} description={article.description}></ArticleNews>
    ))}
    <div id="scrolarticles">
      <p style={styleArrows(page,1)} onClick={()=>{if(page>1) setPage(page=>page-1)}}>&#8701;</p>
      <div id="numbers">
        <p style={style(page,1)} onClick={()=>{if(page!==1) setPage(page=>1)}}>1</p>
        <p style={style(page,2)} onClick={()=>{if(page!==2) setPage(page=>2)}}>2</p>
        <p style={style(page,3)} onClick={()=>{if(page!==3) setPage(page=>3)}}>3</p>
        <p style={style(page,4)} onClick={()=>{if(page!==4) setPage(page=>4)}}>4</p>
        <p style={style(page,5)} onClick={()=>{if(page!==5) setPage(page=>5)}}>5</p>
      </div>
      <p style={styleArrows(5,page)} onClick={()=>{if(page<5) setPage(page=>page+1)}}>&#8702;</p>
    </div>
    </div>
    </div>
  </>
  );
}

export default News;



let bigArticles=[{
  titre:"Les énergies renouvelables : un avenir prometteur",
  date:"11-06-2024",
  src:earth,
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
 },{
   titre:"Forum Annuel de l’ENSTAB organisé par l’ETC",
   src:conference,
   date:"11-06-2024",
   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
  },{
   titre:"Les énergies renouvelables : un avenir prometteur",
   date:"11-06-2024",
   src:energie,
   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
  },{
    titre:"Forum Annuel de l’ENSTAB organisé par l’ETC",
    src:conference,
    date:"11-06-2024",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
   },{
    titre:"Les énergies renouvelables : un avenir prometteur",
    date:"11-06-2024",
    src:energie,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
   },{
    titre:"Les énergies renouvelables : un avenir prometteur",
    date:"11-06-2024",
    src:earth,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
   },{
     titre:"Forum Annuel de l’ENSTAB organisé par l’ETC",
     src:conference,
     date:"11-06-2024",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
    },{
      titre:"Les énergies renouvelables : un avenir prometteur",
      date:"11-06-2024",
      src:energie,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
     },{
       titre:"Forum Annuel de l’ENSTAB organisé par l’ETC",
       src:conference,
       date:"11-06-2024",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
      },{
       titre:"Les énergies renouvelables : un avenir prometteur",
       date:"11-06-2024",
       src:energie,
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
      },{
        titre:"Les énergies renouvelables : un avenir prometteur",
        date:"11-06-2024",
        src:energie,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
       },{
         titre:"Forum Annuel de l’ENSTAB organisé par l’ETC",
         src:conference,
         date:"11-06-2024",
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
        },{
         titre:"Les énergies renouvelables : un avenir prometteur",
         date:"11-06-2024",
         src:energie,
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
        },
        {
          titre:"Forum Annuel de l’ENSTAB organisé par l’ETC",
          src:conference,
          date:"11-06-2024",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
         },
         {
          titre:"Forum Annuel de l’ENSTAB organisé par l’ETC",
          src:conference,
          date:"11-06-2024",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor ..."
         }

 ]