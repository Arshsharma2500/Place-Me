import { useState } from 'react';
import './nav.css';
import logo from '../../assets/placeMelogo.svg';
import { Link } from 'react-router-dom';

function Nav() {
  const [count, setCount] = useState(0);

  function openNav() {
    document.getElementById("mysidepanel").style.height = "100%";
    
  }

  function closeNav() {
    document.getElementById("mysidepanel").style.height = "0%";
   
  }

  return (
    <>
      <nav className='nav'>
        <div className='navdiv'>
          <img id="logoimg" src={logo} alt="Logo"/>
          <div className='list'>
            <p><Link to="/myprofile">My Profile</Link></p>
            <p><Link to="">Services</Link></p>
            <p><Link to="/Company">Company</Link></p>
            <p><Link to="/feedback">Feedback</Link></p>
            <p><Link to="">Notifications</Link></p>
            <button>Sign up</button>
          </div>

          {/* It's only for responsive mobile */}
          <div id='mysidepanel' className='sidepanel'>
            <div id='elements'>
            <Link to="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</Link>
            <p><Link to='/myprofile'>My Profile</Link></p>
            <p><Link to='/'>Services</Link></p>
            <p><Link to='/Company'>Company</Link></p>
            <p><Link to='/feedback'>Feedback</Link></p>
            <p><Link to=''>Notifications</Link></p>
            </div>
          </div>
          <span id="menu" style={{ fontSize: '35px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
        </div>
      </nav>
      {/* <button id="signresp">Sign In</button> */}
    </>
  );
}

export default Nav;
