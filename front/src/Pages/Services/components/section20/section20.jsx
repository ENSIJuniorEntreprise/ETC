import './section20.css'
export default function Section20({titre,im,parag,lin,but1,but2,but3,but4}){
    return(
        <div >
            <div id='section20'>
                <div className='servicepart1'>
                <div id='section201'>
                    <h1>{titre}</h1>
                    <img src={im} alt="" />
                </div>
                <div id='section202'>
                    <div id='section220'>
                        <h2 id='titre1'>{titre}</h2>
                        <p>{parag}</p>
                    </div>
                    <button><a href={lin}>Voir plus  </a></button>
                </div>
                </div>
                <div id='section203'> 
                    <div className='se'>
                        <button className='se1'>{but1}</button>
                        <button className='se2'>{but2}</button>
                    </div>
                    <div className='se'>
                        <button className='se3'>{but3}</button>
                        <button className='se4'>{but4}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}