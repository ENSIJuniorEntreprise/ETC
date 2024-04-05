import './contact1.css';
function Contact1(){
    return(
        <div className='container'>
            <div className='con'>
            <div className='containerimg'>
              <img src="/img.png" alt="managers" className='img1' />
              <img src="/navbar.png" alt="navbar" className='img2' />
 

            </div>
            <div className='container2'>
                <h1 className='titre'>Nous Contacter</h1>
                <p className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum a similique veritatis impedit et vitae beatae, enim laboriosam facilis porro voluptatem officia amet! Enim accusantium laborum totam laudantium explicabo modi.</p>
                <div className='container21'>
                 <div className='container3'>
                    <div className='container31'>
                     <img src="/user.png" alt="user" className='img3'/>
                     <p className='nom'>NOM</p>
                    </div>
                 
                    <input type="text" name="nom" id="" placeholder='veuillez entrer votre nom...' className='input'/>

                 </div>
                 <div className='container3'>
                    <div className='container31'>
                     <img src="/user.png" alt="user" className='img3' />
                     <p className='nom'>Prénom</p>
                    </div>
                 
                    <input type="text" name="nom" id="" placeholder='veuillez entrer votre prénom...'className='input'/>

                 </div>
                 <div className='container3'>
                    <div className='container31'>
                     <img src="/@.png" alt="user"className='img3' />
                     <p className='nom'>Adresse-Mail</p>

                    </div>
               
                    <input type="text" name="nom" id="" placeholder='veuillez entrer votre adresse mail...' className='input'/>

                 </div>
                 <div className='container3'>
                    <div className='container31'>
                     <img src="/mail.png" alt="user" className='img3'/>
                     <p className='nom'>Message</p>

                    </div>
                  
                    <input type="text" name="nom" id="" placeholder='veuillez saisir votre message ou votre proposition...' className='input1'/>

                 </div>
                 <div>
                    <button className='button'>Envoyer votre demande</button>

                 </div>

                </div>

                

            </div>

            </div>
           
          
            
        </div>
    )
}
export default Contact1