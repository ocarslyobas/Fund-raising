import {React,useState} from 'react';
import "./navheaders.css";
import Donatepanel from './Donatepanel';
import {menuicon,closedicon} from "../../Assets/photos/assets";
import { Link } from 'react-router-dom';
import Home from './Home';
import About from '../About/AboutHeader';
import Contactsetup from '../contact/Contactsetup';






const Navheaders = ()=>{


  const [active, setActive] = useState(false);
  const close = ()=>{setActive(false)};

return(
<>
<nav className="navcontent">
  <div className="navlogo">
    <a href=""> S <span className='navlogo2'>Lara</span></a>
  </div>
  <div className="donpanel">
    <Donatepanel/>
  </div>
  <ul className='nav-list'>
    <Link className='Link' to="/"> Home</Link>
    <Link className='Link' to="/About"> About</Link>
    <Link className='Link' to="Contact"> Contact</Link>
  </ul>
  <div className="menuicon" onClick={()=>setActive(true)}>
    <img src={menuicon} alt="menu" />
  </div>
</nav>

<div className= {`mobilenav ${active?"active":""}`}>
  <div className="mobilenavhead">
  <div className="navlogo">
    <a href=""> S <span className='navlogo2'>Lara</span></a>
  </div>
  <div className="close-icon" onClick={()=>setActive(false)}>
  <img src={closedicon} alt="closebtn" />
  </div>
  </div>

  <ul className='mobilenav-list'>
    <Link className='Link' to="/" onClick={close} > Home</Link>
    <Link className='Link' to="/About" onClick={close} > About</Link>
    <Link className='Link' to="Contact" onClick={close} > Contact</Link>
  </ul>

</div>
</>
);




}
export default Navheaders;

