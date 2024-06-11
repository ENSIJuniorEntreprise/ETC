import "./ArticleNews.css";
export default function ArticleNews(props){
    let {src,titre,date,description}=props
    return <div className='articlenews'>
   <img src={src} alt={titre}/>
   <div>
    <h2>{titre}</h2>
    <hr />
    <h3>{date}</h3>
    <p>{description}</p>
    <div className="btncontainer">
   <button>Voir plus &gt;</button></div>
   </div>
    </div>
  }