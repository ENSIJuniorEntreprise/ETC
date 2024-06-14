import {React, useState} from "react";
import "./Footer.css";
import { FaFacebookF, FaPhone, FaAt  } from "react-icons/fa";
import { BsLinkedin, BsInstagram, BsGeoAlt } from "react-icons/bs";
import logo from "../../Assets/images/Logo ETC 01 3.png"
// import logo from "./../../Assets/new.png"
function Footer() {
  const [email, setEmail] = useState('');
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="part111">

          <img src={logo} alt="logo" className="logo-img1" />
          <div className="para">
            <span className="slogann">#<span className="leader">Leader</span>_By_Birth_<span className="junior">Junior</span>_By_Choice</span>
          </div>

        </div>


        <div className="lien part22">
        <h3>Pages</h3>
          <ul className="footer-ul">
            <li>
              <a className="footer-a" href="/">
                Accueil
              </a>
            </li>
            <li>
              <a className="footer-a" href="/about">
                A propos
              </a>
            </li>
            <li>
              <a className="footer-a" href="/services">
                Services
              </a>
            </li> 
            <li>
              <a className="footer-a" href="/news">
                Actualités
              </a>
            </li>
            <li>
              <a className="footer-a" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>




        <div className="footer-contact lien">
          <h3>Contact</h3> 
          <div className="span">

             <div className="contactt">
            <FaPhone size={"20px"} className="icon" />
            <span className="footer-span">29 903 814</span>
            </div> 

             <div className="contactt">
              <FaAt size={"20px"} className="icon" />
              <span className="footer-span mail">etc.contact.je@gmail.com</span>
            </div>

             <div className="contactt">
            <BsGeoAlt size={"20px"} className="icon" />
              <span className="footer-span mail lieu">Ecole Nationale des Sciences et Technologies Avancées de Borj Cédria, Hammam Chott, Tunisia</span>
            </div> 
          </div>

          {/*  */}

        </div>



      </div>

      <div className="footer_container footer_container1">
      <div className="social">
            <a className="footer-a" href="https://www.facebook.com/ENSI.Junior.Entreprise">
              <FaFacebookF size={"35px"} className="icones" />
            </a>
            <a className="footer-a" href="https://www.instagram.com/ensijunior/">
              <BsInstagram size={"35px"} className="icones" />
            </a>
            <a className="footer-a" href="https://www.linkedin.com/company/ensi-junior-entreprise/">
              <BsLinkedin size={"35px"} className="icones" />
            </a>
          </div>


      <div className="newsletter">
         <input type="text" placeholder="Subscribe to our newsletter" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
         <button className="subscribe">Subscribe</button>
      </div>
      </div>


      <div className="copy">
        © All rights reserved - ETC JE 2024
      </div>
    </div>
  );
}

export default Footer;
