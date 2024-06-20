import './section2.css';
import se from './se.png';
import ee from './ee.png';
import Section20 from '../section20/section20.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Section2() {
    const location = useLocation();
    const systemeEmbarqueRef = useRef(null);
    const systemeEnergetiqueRef = useRef(null);

    useEffect(() => {
        if (location.state?.scrollTo) {
            let section;
            if (location.state.scrollTo === 'Système embarqué') {
                section = systemeEmbarqueRef.current;
            } else if (location.state.scrollTo === 'Système énergétique') {
                section = systemeEnergetiqueRef.current;
            }
            
            if (section) {
                const topOffset = section.getBoundingClientRect().top + window.pageYOffset - 55;
                window.scrollTo({ top: topOffset, behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div id='section2'>
            <div className='serviceSection'>
                <div id='Système embarqué' ref={systemeEmbarqueRef}>
                    <Section20
                        titre='Système embarqué'
                        im={se}
                        parag='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.'
                        lin='#'
                        but1='Solutions industrielles basées sur l IA'
                        but2='Manipulation des puces électroniques'
                        but3='IOT'
                        but4='Manipulation des puces capteurs'
                    />
                </div>
                <div id='Système énergétique' ref={systemeEnergetiqueRef}>
                    <Section20
                        titre='Système énergétique'
                        im={ee}
                        parag='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum.'
                        lin='#'
                        but1='Etude énergétique'
                        but2='Audit thermique et énergétique'
                        but3='Efficacité énergétique'
                        but4='Valorisation de déchets'
                    />
                </div>
            </div>
        </div>
    );
}
