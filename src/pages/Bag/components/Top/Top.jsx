import React from 'react';
import { BagContext } from '../../../../contexts/BagContext';
import './Top.css';
import { Link } from 'react-router-dom';
import arrow from '../../../../assets/icons/arrow.svg';
import bagIcon from '../../../../assets/icons/bag.svg';

const Top = ({ checkout }) => {
  const { bag } = React.useContext(BagContext);

  if (checkout) {
    return (
      <div className="container top">
        <nav>
          <ol className="top-breadcrumb">
            <li>
              <Link to="/">Início</Link>
              <img src={arrow} alt="Ícone de seta" />
            </li>

            <li>
              <button type="button">Carrinho</button>
              <img src={arrow} alt="Ícone de seta" />
            </li>

            <li>
              <strong>Checkout</strong>
            </li>
          </ol>
        </nav>
        <h1>Finalizar Compra</h1>
      </div>
    );
  }

  return (
    <div className="container top">
      <h1>Minha Sacola</h1>
      <span>Quantidade de itens: {bag.length}</span>
    </div>
  );
};

export default Top;
