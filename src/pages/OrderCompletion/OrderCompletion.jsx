import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SuccessIcon from '../../assets/icons/success.svg?react';
import './OrderCompletion.css';
import Error from '../../components/Error/Error';

const OrderCompletion = () => {
  const location = useLocation();
  const purchaseCompleted = location.state?.purchaseCompleted;

  if (!purchaseCompleted) {
    return <Error error="Você não possui um pedido recém-finalizado." />;
  }

  return (
    <section className="container order-completion">
      <div className="order-completion-icon">
        <SuccessIcon />
      </div>

      <div className="order-completion-content">
        <h1>Compra concluída!</h1>
        <p>
          Recebemos seu pedido e enviaremos a confirmação para o e-mail cadastrado. Obrigado por
          comprar com a Dummy.
        </p>

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
