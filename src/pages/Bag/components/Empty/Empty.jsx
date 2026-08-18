import React from 'react';
import './Empty.css';
import bagIcon from '../../../../assets/icons/bag.svg';
import { Link } from 'react-router-dom';

const Empty = () => {
  return (
    <section className="container empty-bag">
      <div className="empty-bag-icon">
        <img src={bagIcon} alt="Ícone de sacola" />
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
