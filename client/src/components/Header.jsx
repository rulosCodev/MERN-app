import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/brain.png';
import perfil from '../assets/static/logo.jpg';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
      <Link className="logoLink" to="/">
        <div className='header__logoContainer'>
          <img
            src={logo}
            atl='logo'
            className='logo'
          />
          <h1>Neuro<span>Traking</span></h1>
        </div>
      </Link >

      <nav className='header__nav' >
        <ul >
          <li id="pre" className="nav_active">Cirugias</li>
          

        </ul>
      </nav>
      <div className='header__perfil'>
        <img className="perfil" src={perfil} atl='perfil' />
        <p className='perfilName'>Dc. Fredy</p>
      </div>
    </div>
  );
};

export default Header;
