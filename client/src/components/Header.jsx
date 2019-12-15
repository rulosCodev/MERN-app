import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo3.png';
import perfil from '../assets/static/logo.jpg';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerItemContainer'>
        <img
          src={logo}
          atl='logo'
          className='header__logo'
        />
      </div>

      <nav>
        <ul className='header__nav'>
          <li>Preoperatorio</li>
          <li>Intraoperatorio</li>
          <li>Postoperatorio</li>

        </ul>
      </nav>
      <div className='headerItemContainer perfil'>
        <img src={perfil} atl='perfil' />
        <p className='perfilName'>Dc. Fredy</p>
      </div>
    </div>
  );
};

export default Header;
