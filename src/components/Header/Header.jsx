import React from 'react';
import './Header.css';
import logo from '../../assets/icons/logo.svg';
import BagIcon from '../../assets/icons/bag.svg?react';
import UserIcon from '../../assets/icons/user.svg?react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-bg">
      <div className="header container">
        <Link to="/" className="header-logo">
          <div className="header-logo-icon">
            <img src={logo} alt="Logo Dummy" />
          </div>
          <span>
            Dummy<span>.</span>
          </span>
        </Link>

        <nav>
          <ul className="header-list">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/produtos">Produtos</NavLink>
            <NavLink to="/categorias">Categorias</NavLink>
          </ul>
        </nav>

        <input className="header-search" type="text" placeholder="Buscar produtos..." />

        <div className="header-buttons">
          <NavLink to="/usuario">
            <UserIcon className="header-icon" />
          </NavLink>
          <NavLink to="/sacola">
            <BagIcon className="header-icon" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
