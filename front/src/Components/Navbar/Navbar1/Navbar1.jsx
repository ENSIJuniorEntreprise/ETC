import './Navbar.css';

function Navbar() {
  return (
    <nav className='nav'>
        <img src="/navbar.png" alt="navbar" className='img'/>
        <ul>
          <li>
            <a href="#" className='nav-link accueil'>Accueil</a>
          </li>
          <li>
            <a href="#" className='nav-link apropos'>A propos</a>
          
          </li>
          <li>
            <a href="/Service" className='nav-link service'>Services</a>
          </li>
          <li>
            <a href="#" className='nav-link actualité'>Actualités</a>
          </li>
          <li>
            <a href="#" className='nav-link contact'>Contact</a>
          </li>
          
        </ul>
    </nav>
  );
}

export default Navbar;
