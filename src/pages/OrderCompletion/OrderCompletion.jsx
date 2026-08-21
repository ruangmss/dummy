import React from 'react';
import { Link } from 'react-router-dom';
import SuccessIcon from '../../assets/icons/success.svg?react';
import './OrderCompletion.css';

const OrderCompletion = () => {
  return (
    <section className="container order-completion">
      <div className="order-completion-icon">
        <SuccessIcon />
      </div>

      <div className="order-completion-content">
        <h1>Compra concluída!</h1>
        <p>Seu pedido foi realizado com sucesso. Obrigado por comprar com a Dummy.</p>

        <div className="order-completion-buttons">
          <Link to="/" className="button secondary">
            Voltar ao Início
          </Link>
          <Link to="/produtos" className="button">
            Continuar Comprando
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderCompletion;
