import './Footer1.css';
function Footer1(){
    return(
        <footer>
            <div className='footer'>
                <div className='containerr'>
                    <div className='b'>
                        <img src="/navbar.png" alt="navbar" className='im' />
                        <div className='a'>
                            <p className='aa'>#</p>
                            <p className='aaa'>leader</p>
                            <p className='aa'>_by_birth_</p>
                            <p className='aaaa'>junior</p>
                            <p className='aa'>_by_choice</p>
                        </div>
                    </div>
                    <div>
                        <p className='pages'>Pages :</p>
                        <div className='pages1'>
                        <a href="#" className='txt'> Accueil</a>
                        <a href="#" className='txt'>A propos</a>
                        <a href="#" className='txt'>Services</a>
                        <a href="#" className='txt'>Actualités</a>
                        <a href="#" className='txt'>Contact</a>

                        </div>
                    </div>
                    <div>
                        <p className='contact11'>Contact :</p>
                        <div className='contact1'>
                         <div className='contact2'>
                            <img src="/email.png" alt="email" className='imgg'/>
                            <p className='txtt'>etc.contact.je@gmail.com</p>
                         </div>
                         <div className='contact2'>
                            <img src="/telephone.png" alt="telephone" className='imgg' />
                            <p className='txtt'>+216 22 222 222</p>
                         </div>
                         <div className='contact2'>
                            <img src="/lieu.png" alt="lieu" className='imgg'/>
                            <div className='txttt'>
                             <p>Ecole Nationale des Sciences et Technologies Avancées de Borj Cédria, Hammam Chott, Tunisia</p>

                            </div>
                            
                         </div>


                        </div>
                        
                    </div>

                </div>
                <div className='containerrr'>
                    <div className='rs'>
                        <img src="/instagram.png" alt="instagram" className='rs1'/>
                        <img src="/facebook.png" alt="facebook"className='rs1'/>
                        <img src="/linkedin.png" alt="linkedin"className='rs1' />
                    </div>
                    <div className='subscribe'>
                        <input type="text" placeholder='Subscribe to our newsletter' className='inp'/>
                        <button className='sub'>subscribe</button>
                    </div>

                </div>
                <div>
                    <p className='etc'>© All Rights Reserved ETC 2024</p>
                </div>

            </div>
        </footer>

    )
}
export default Footer1;