import React  from 'react';
import './topage.css';
import logo from '../../Assets/4ee934befba8ca8b00dd73de6c38b560.png';

function Topage() {


  return (
    <>
      <div className="Aboutdivpic">
        <div>
          <img className="Aboutlogo" src={logo} alt="logo" />
        </div>
      </div>
      <div className="Aboutflex">
        <div className="Aboutbox">
          <h1>A propos</h1>
          <div />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci magnam debitis voluptate reprehenderit impedit commodi quaerat soluta at a dolores, incidunt labore quas unde molestiae natus similique maiores facilis id. incidunt labore quas unde molestiae natus similique maiores facilis id.</p>
        </div>
      </div>
    </>
  );
}

export default Topage;