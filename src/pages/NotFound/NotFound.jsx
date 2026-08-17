import { Link, useNavigate } from 'react-router-dom';
import CartIcon from '../../assets/icons/logo.svg?react';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="container not-found">
      <div className="not-found-illustration">
        <span className="not-found-code">404</span>
        <div className="not-found-icon">
          <CartIcon />
        </div>
        <span className="not-found-dot not-found-dot-left" />
        <span className="not-found-dot not-found-dot-right" />
      </div>

      <div className="not-found-content">
        <h1>Página não encontrada.</h1>
        <p>A página que você procura não existe, foi removida ou mudou de endereço.</p>

        <div className="not-found-actions">
          <Link to="/" className="button">
            Voltar ao início
          </Link>
          <button type="button" className="button secondary" onClick={() => navigate(-1)}>
            Página anterior
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
