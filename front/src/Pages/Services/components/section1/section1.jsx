import './section1.css';
import image from './image.png';
import logo from './../section2/logo.png';

export default function Section1() {
  return (
    <div className='servicesection'>
      <div id='section1'>
        <img id='section11' src={image} alt="" /> 
      </div>
      <div className='section1Service'>
        <div id='log'>
          <img src={logo} alt="" />
        </div>
        <div id='prest'>
          <h1>Nos prestations de service</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  );
}
