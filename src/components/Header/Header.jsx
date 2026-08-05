import React from 'react';
import './Header.css';
import logo from '../../assets/icons/logo.svg';
import menu from '../../assets/icons/menu.svg';
import searchIcon from '../../assets/icons/search.svg';
import BagIcon from '../../assets/icons/bag.svg?react';
import UserIcon from '../../assets/icons/user.svg?react';
import { Link, NavLink, useMatch, useNavigate } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';
import Input from '../Input/Input';

const Header = () => {
  const mobile = useMedia('(max-width: 768px)');
  const navigate = useNavigate();
  const [mobileNav, setMobileNav] = React.useState(false);
  const [mobileSearch, setMobileSearch] = React.useState(false);
  const [search, setSearch] = React.useState('');

  function submitSearch(event) {
    event.preventDefault();

    const normalizedSearch = search.trim();

    if (!normalizedSearch) {
      navigate('/');
      return;
    }

    navigate(`/pesquisa?q=${encodeURIComponent(normalizedSearch)}`);
  }

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

        {!mobile && (
          <nav>
            <ul className="header-list">
              <NavLink to="/">Início</NavLink>
              <NavLink to="/produtos">Produtos</NavLink>
              <NavLink to="/categorias">Categorias</NavLink>
            </ul>
          </nav>
        )}

        {!mobile && (
          <form onSubmit={submitSearch}>
            <Input
              className="search"
              type="text"
              placeholder="Buscar produtos..."
              value={search}
              onChange={({ target }) => setSearch(target.value)}
            />
          </form>
        )}

        <div className="header-buttons">
          {mobile && (
            <button
              onClick={() => setMobileSearch((mobileSearch) => !mobileSearch)}
              className={`header-search-mobile-icon`}
            >
              <img src={searchIcon} alt="Ícone de pesquisa" />
            </button>
          )}

          <NavLink to="/usuario">
            <UserIcon className="header-icon" />
          </NavLink>
          <NavLink to="/sacola">
            <BagIcon className="header-icon" />
          </NavLink>

          {mobile && (
            <button
              onClick={() => setMobileNav((mobileNav) => !mobileNav)}
              className={`header-list-mobile-icon ${mobileNav ? 'opened' : ''}`}
            >
              <img src={menu} alt="Ícone de menu" />
            </button>
          )}
        </div>
      </div>

      {mobile && (
        <div className={`header-list-mobile-bg ${mobileNav ? 'opened' : ''}`}>
          <nav>
            <ul className="header-list-mobile">
              <NavLink to="/">Início</NavLink>
              <NavLink to="/produtos">Produtos</NavLink>
              <NavLink to="/categorias">Categorias</NavLink>
            </ul>
          </nav>
        </div>
      )}

      {mobile && (
        <form onSubmit={submitSearch} className={`header-search-mobile-bg ${mobileSearch ? 'opened' : ''}`}>
          <Input
            className="search"
            type="text"
            placeholder="Buscar produtos..."
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </form>
      )}
    </header>
  );
};

export default Header;
