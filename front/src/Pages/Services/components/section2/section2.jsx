import './section2.css'
import logo from './logo.png'
import se from './se.png'
import ee from './ee.png'
import Section20 from '../section20/section20.jsx'
export default function Section2(){
    return(
        <div id='section2'>
            <div id='log'>
                <img src={logo} alt="" />
            </div>
            <div id='prest'>
                <h1>Nos prestations de service</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <Section20 
            titre='Système embarqué'
            im={se}
            parag=' Lorem ipsum dolor sit amet, cons sectetur adipiscing elit, sed do eiusmod tempor incids didunt ut labore et dolore magna aliqua. Ut enim addc minim veniam. Lorem ipsum dolor sit Lorem ipsum szd dolor sit Lorem ipsum dolor sit Lorem ipsum. Lorem sds ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum'
            lin='#'
            but1='Solutions industrielles basées sur l IA'
            but2='Manipulation des puces électroniques'
            but3='IOT'
            but4='Manipulation des puces capteurs'
            />
            <Section20 
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
    )
}