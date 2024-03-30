import './About.css'
import rectangle1 from './assets/Rectangle 69.png'
import rectangle2 from './assets/Rectangle 160.png'
import rectangle3 from './assets/Rectangle 162.png'
import pic1 from './assets/target 1.png'
import pic2 from './assets/mission (1) 1.png'
import pic3 from './assets/passionne.png'
import pic4 from './assets/meilleur-entrainement.png'
import pic5 from './assets/innovation.png'
import act1 from './assets/act1.png'
import act2 from './assets/act2.png'
import act3 from './assets/act3.png'
function About(){
    return(
        <>
          <div className='recapropos'>
               <div className='bg1'>
                    <img src={rectangle1} alt="" />
               </div>
               <h1>A propos</h1>
               <div className='line'></div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div> 
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <div className='vispic'>
                <div className='recpic'>
                    <div className='rect2'><img src={rectangle2} alt="" /></div>
                    <div className='pic1'><img src={pic1} alt="" style={{ backgroundColor: 'transparent' }} /></div>
                </div>
                <div className='text'>
                    <h1 style={{ fontFamily: 'roboto' }}>Notre vision</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore .</p>
                </div>
           </div>
           <br/><br/><br/>
           <div className='vispic'>
                <div className='text2'>
                    <h1 style={{ fontFamily: 'roboto' }}>Notre mission</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore .</p>
                </div>
                <div className='recpic2'>
                    <div className='rect3'><img src={rectangle3} alt="" /></div>
                    <div className='pic2'><img src={pic2} alt="" style={{ backgroundColor: 'transparent' }} /></div>
                </div>
           </div>
           <br/><br/><br/><br/><br/>
           <h2 style={{ fontFamily: 'roboto' }}>Nos Valeurs</h2>
           <div className='values'>
                <div className='img1'>
                    <img src={pic3} alt="" />
                    <p>Passion</p>
                </div>
                <div className='img2'>
                    <img src={pic4} alt="" />
                    <p>Excellence</p>
                </div>
                <div className='img3'>
                    <img src={pic5} alt="" />
                    <p>Innovation</p>
                </div>
           </div>
           <br/><br/><br/><br/><br/>
           <h2 style={{ fontFamily: 'roboto' }}>Nos activités</h2>
        </>
    );
}
export default About;
