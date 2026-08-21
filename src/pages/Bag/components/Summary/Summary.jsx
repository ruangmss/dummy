import React from 'react';
import './Summary.css';
import Button from '../../../../components/Button/Button';
import LockIcon from '../../../../assets/icons/lock.svg?react';
import { Link } from 'react-router-dom';
import SummaryProducts from './components/SummaryProducts/SummaryProducts';

const Summary = ({ products, payment = false }) => {
  const total = products.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);

  const subtotal = products.reduce((subtotal, product) => {
    const originalPrice = product.price / (1 - product.discountPercentage / 100);

    return subtotal + originalPrice * product.quantity;
  }, 0);

  const totalDiscount = subtotal - total;

  const freeShippingMinimum = 200;
  const shipping = total < freeShippingMinimum ? 19.9 : 0;
  const difference = freeShippingMinimum - total;

  const finalTotal = total + shipping;

  return (
    <div className="container summary-bg">
      <div className="summary">
        <h2>Resumo do Pedido</h2>

        {payment && <SummaryProducts products={products} />}

        <div className="summary-data">
          <span className="summary-data-item">
            {' '}
            Subtotal
            <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
          </span>

          <span className="summary-data-item discount">
            {' '}
            Desconto
            <span>R$ {totalDiscount.toFixed(2).replace('.', ',')}</span>
          </span>

          <span className="summary-data-item">
            {' '}
            Frete
            {shipping > 0 ? (
              <span>R$ {shipping.toFixed(2).replace('.', ',')}</span>
            ) : (
              <span className="free-shipping">Grátis</span>
            )}
          </span>

          {difference > 0 && (
            <span className="summary-difference">
              Adicione mais R$ {difference.toFixed(2).replace('.', ',')} para ganhar frete grátis!
            </span>
          )}
        </div>

        <hr />

        <span className="summary-total-value">
          {' '}
          Total
          <span>R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
        </span>

        <div className="summary-buttons">
          {payment ? (
            <Button text="Finalizar Pagamento" />
          ) : (
            <Link to="/pagamento" className="button">
              Finalizar Compra
            </Link>
          )}
          <Link to={payment ? '/sacola' : '/produtos'} className="button secondary">
            {payment ? 'Voltar para a Sacola' : 'Continuar Comprando'}
          </Link>
        </div>

        <span className="summary-security-text">
          <LockIcon />
          Ambiente SSL | Compra segura
        </span>
      </div>
    </div>
  );
};

export default Summary;
