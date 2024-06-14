import './Contact.css';
import logo from '../../Assets/4ee934befba8ca8b00dd73de6c38b560.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <>
      <div className="Contactdivpic">
        <div>
          <img className="Contactlogo" src={logo} alt="logo" />
        </div>
      </div>
      <div className="Contactflex">
        <div className="Contactbox">
          <h1>Nous contacter</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid,ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid,ipsum dolor sit amet, consectetur.</p>
          <form>
            <div className="Contactfield">
              <div className="Contactlabel">
                <FontAwesomeIcon icon={faUser} className='icons'/>
                <label>Nom</label>
              </div>
              <input type="text" name="nom" aria-label="Nom" placeholder='Veuillez entrer votre nom'/>
            </div>
            <div className="Contactfield">
              <div className="Contactlabel">
                <FontAwesomeIcon icon={faUser} className='icons'/>
                <label>Prénom</label>
              </div>
              <input type="text" name="prenom" aria-label="Prénom" placeholder='Veuillez entrer votre prénom'/>
            </div>
            <div className="Contactfield">
              <div className="Contactlabel">
                <FontAwesomeIcon icon={faEnvelope} className='icons'/>
                <label>Adresse mail</label>
              </div>
              <input type="email" name="email" aria-label="Adresse mail" placeholder='Veuillez saisir votre adresse mail'/>
            </div>
            <div className="Contactfield">
              <div className="Contactlabel">
                <FontAwesomeIcon icon={faComment} className='icons'/>
                <label>Message</label>
              </div>
              <textarea name="message" aria-label="Message" placeholder='Veuillez saisir votre message ou votre proposition ...'></textarea>
            </div>
            <div className="Contactfield">
            <div></div>
            <input type='submit' value='Envoyer votre demande' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
