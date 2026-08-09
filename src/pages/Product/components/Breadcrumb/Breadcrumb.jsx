import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";
import arrow from "../../../../assets/icons/arrow.svg";

const Breadcrumb = ({ product }) => {
  return (
    <nav>
      <ol className="product-breadcrumb container">
        <li>
          <Link to="/">Início</Link>
          <img src={arrow} alt="Ícone de seta" />
        </li>

        <li>
          <Link to="/produtos">Produtos</Link>
          <img src={arrow} alt="Ícone de seta" />
        </li>

        <li>
          <Link to={`/categoria/${product.category}`}>
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </Link>
          <img src={arrow} alt="Ícone de seta" />
        </li>

        <li>
          <span>{product.title}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
