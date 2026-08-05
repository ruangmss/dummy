import React from 'react';
import logo from '../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import './Footer.css';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-brand-logo">
              <div className="footer-brand-icon">
                <img src={logo} alt="Logo Dummy" />
              </div>
              <span>
                Dummy<span>.</span>
              </span>
            </Link>

            <p>Produtos premium com a melhor experiência de compra online.</p>
          </div>

          <nav className="footer-nav">
            <div className="footer-nav-block">
              <h3>Loja</h3>

              <div>
                <Link to="/produtos">Produtos</Link>
                <Link to="/categorias">Categorias</Link>
              </div>
            </div>

            <div className="footer-nav-block">
              <h3>Conta</h3>

              <div>
                <Link to="/usuario">Usuário</Link>
                <Link to="/sacola">Sacola</Link>
              </div>
            </div>

            <div className="footer-nav-block">
              <h3>Contato</h3>

              <div>
                <a href="mailto:dummy@contato.com.br">dummy@contato.com.br</a>
                <a href="tel:99999999999">(99) 99999-9999</a>
              </div>
            </div>
          </nav>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>© {year} Dummy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
