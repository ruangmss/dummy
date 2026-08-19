import React from 'react';
import { BagContext } from '../../../../contexts/BagContext';
import './Top.css';

const Top = () => {
  const { bag } = React.useContext(BagContext);

  return (
    <div className="container top">
      <h1>Minha Sacola</h1>
      <span>Quantidade de itens: {bag.length}</span>
    </div>
  );
};

export default Top;
