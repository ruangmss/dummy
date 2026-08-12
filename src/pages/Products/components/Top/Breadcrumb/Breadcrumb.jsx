import React from 'react';
import './Breadcrumb.css';
import { Link } from 'react-router-dom';
import arrow from '../../../../../assets/icons/arrow.svg';

const Breadcrumb = ({ category }) => {
  return (
    <nav>
      <ol className="category-breadcrumb">
        <li>
          <Link to="/">Início</Link>
          <img src={arrow} alt="Ícone de seta" />
        </li>

        <li>
          <Link to="/categorias">Categorias</Link>
          <img src={arrow} alt="Ícone de seta" />
        </li>

        <li>
          <span to={`/categoria/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
