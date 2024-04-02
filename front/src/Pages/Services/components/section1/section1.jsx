import './section1.css';
import logo from './logo.png';
export default function Section1(){
    return(
        <div id='section1'>
            <div id='section11'></div>
            <div id='section12'>
                <div id='log'>
                    <img src={logo} alt="" />
                </div>
                <div id='prest'>
                    <h1>Nos prestations de service</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
        </div>
    )
}