import './sec1.css';
import logo1 from './logo1.png';
export default function Sec1(){
    return(
        <div id='sect1'>
            <img src={logo1} alt="" />
            <div id='sec11'>
                <p className='tex'>#</p>
                <p id='lead'>Leader</p>
                <p className='tex'>_By_Birth_</p>
                <p id='jun'>Junior</p>
                <p className='tex'>_By_Choice</p>
            </div>
        </div>
    )
}