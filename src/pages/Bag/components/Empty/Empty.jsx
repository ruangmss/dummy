import React from 'react';
import './Empty.css';
import BagIcon from '../../../../assets/icons/bag.svg?react';
import { Link } from 'react-router-dom';

const Empty = () => {
  return (
    <section className="container empty-bag">
      <div className="empty-bag-icon">
        <BagIcon aria-label="Ícone de sacola" />
      </div>

      <div className="empty-bag-content">
        <h1>Sua sacola está vazia</h1>
        <p>Explore nossos produtos e encontre algo especial para adicionar à sua sacola.</p>
        <Link to="/produtos" className="button">
          Explorar Produtos
        </Link>
      </div>
    </section>
  );
};

export default Empty;
