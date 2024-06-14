import Section2 from './components/section2/section2.jsx'
import Section1 from './components/section1/section1.jsx'
import './Services.css';
import logo from '../../Assets/4ee934befba8ca8b00dd73de6c38b560.png';

function Services() {


  return (
    <>
      <div className="Servicedivpic">
        <div>
          <img className="Servicelogo" src={logo} alt="logo" />
        </div>
      </div>
      <div className="Serviceflex">
        <div className="Servicebox">
          <h1>Nos prestations de service</h1>
          <div />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci magnam debitis voluptate reprehenderit impedit commodi quaerat soluta at a dolores, incidunt labore quas unde molestiae natus similique maiores facilis id. incidunt labore quas unde molestiae natus similique maiores facilis id.</p>
        </div>
      </div>
      <Section2/>
    </>
  );
}

export default Services;