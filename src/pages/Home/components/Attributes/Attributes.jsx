import React from 'react';
import './Attributes.css';
import rocket from '../../../../assets/icons/rocket.svg';
import lightning from '../../../../assets/icons/lightning.svg';
import change from '../../../../assets/icons/change.svg';

const Attributes = () => {
  return (
    <ul className="attributes container">
      <li className="attribute" id="shipping">
        <img src={rocket} />

        <div className="attribute-content">
          <strong>Frete Grátis</strong>
          <p>Em compras acima de R$ 200,00</p>
        </div>
      </li>

      <li className="attribute" id="discount">
        <img src={lightning} />

        <div className="attribute-content">
          <strong>Até 30% de Desconto</strong>
          <p>Nos eletrônicos selecionados</p>
        </div>
      </li>

      <li className="attribute" id="exchange">
        <img src={change} />

        <div className="attribute-content">
          <strong>Troca Simples</strong>
          <p>Devolução em até 30 dias</p>
        </div>
      </li>
    </ul>
  );
};

export default Attributes;
