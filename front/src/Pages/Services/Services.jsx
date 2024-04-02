import './Services.css';
import se from './components/section2/se.png';
import ee from './components/section2/ee.png';
import Section1 from './components/section1/section1.jsx';
import Section2 from './components/section2/section2.jsx';
function Services() {
  return (
    <div id='serv'>
            <Section1 />
            <div id='serv1'>
                <Section2 
                titre='Système embarqué'
                im={se}
                parag=' Lorem ipsum dolor sit amet, cons sectetur adipiscing elit, sed do eiusmod tempor incids didunt ut labore et dolore magna aliqua. Ut enim addc minim veniam. Lorem ipsum dolor sit Lorem ipsum szd dolor sit Lorem ipsum dolor sit Lorem ipsum. Lorem sds ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum'
                lin='#'
                but1='Solutions industrielles basées sur l IA'
                but2='Manipulation des puces électroniques'
                but3='IOT'
                but4='Manipulation des puces capteurs'
                />
                <Section2 
                titre='Système énergétique'
                im={ee}
                parag=' Lorem ipsum dolor sit amet, cons sectetur adipiscing elit, sed do eiusmod tempor incids didunt ut labore et dolore magna aliqua. Ut enim addc minim veniam. Lorem ipsum dolor sit Lorem ipsum szd dolor sit Lorem ipsum dolor sit Lorem ipsum. Lorem sds ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum'
                lin='#'
                but1='Etude énergétique'
                but2='Audit thermique et énergétique'
                but3='Efficacité énergétique'
                but4='Valorisation de déchets'
                />
            </div>
    </div>
  );
}

export default Services;
