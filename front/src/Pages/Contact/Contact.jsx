import React, { useState } from 'react';
import logo from '../../Assets/4ee934befba8ca8b00dd73de6c38b560.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import { useToasts } from 'react-toast-notifications';

function Contact() {
  const { addToast } = useToasts();

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation de saisie
    if (!nom || !prenom || !email || !message) {
      addToast('Veuillez remplir tous les champs.', { appearance: 'warning', autoDismiss: true });
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Prenom: prenom, Nom: nom, Email: email, message: message }),
      });

      if (response.ok) {
        // Reset form fields after successful submission
        setNom('');
        setPrenom('');
        setEmail('');
        setMessage('');

        // Show toast notification for success
        addToast('Email envoyé avec succès!', { appearance: 'success', autoDismiss: true });
      } else {
        throw new Error('Une erreur est survenue lors de l\'envoi de l\'email.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);

      // Show toast notification for error
      addToast('Une erreur est survenue lors de l\'envoi de l\'email. Veuillez réessayer.', { appearance: 'error', autoDismiss: true });
    }
  };

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ipsum dolor sit amet,
            consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ipsum
            dolor sit amet, consectetur.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="Contactfield">
              <div className="Contactlabel">
                <FontAwesomeIcon icon={faUser} className="icons" />
                <label>Nom</label>
              </div>
              <input
                type="text"
                name="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                aria-label="Nom"
                placeholder="Veuillez entrer votre nom"
              />
            </div>
            <div className="Contactfield">
              <div className="Contactlabel">
                <FontAwesomeIcon icon={faUser} className="icons" />
                <label>Prénom</label>
              </div>
              <input
                type="text"
                name="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                aria-label="Prénom"
                placeholder="Veuillez entrer votre prénom"
              />
            </div>
            <div className="Contactfield">
              <div className="Contactlabel">
                <FontAwesomeIcon icon={faEnvelope} className="icons" />
                <label>Adresse mail</label>
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Adresse mail"
                placeholder="Veuillez saisir votre adresse mail"
              />
            </div>
            <div className="Contactfield">
              <div className="Contactlabel">
                <FontAwesomeIcon icon={faComment} className="icons" />
                <label>Message</label>
              </div>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Message"
                placeholder="Veuillez saisir votre message ou votre proposition ..."
              ></textarea>
            </div>
            <div className="Contactfield">
              <div></div>
              <input type="submit" value="Envoyer votre demande" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
