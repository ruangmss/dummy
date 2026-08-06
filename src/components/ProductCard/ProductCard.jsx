import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const hasDiscount = product.discountPercentage > 0;
  let originalPrice = 0;

  if (hasDiscount) {
    originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
  }

  return (
    <article className="product-card">
      <Link to={`/produto/${product.id}`}>
        <div className="product-card-image">
          <img src={product.thumbnail} alt={`Imagem do produto ${product.title}`} />
          {hasDiscount && <span className="product-card-discount">- {product.discountPercentage.toFixed(1)}%</span>}
        </div>

        <div className="product-card-content">
          <div className="product-card-content-top">
            <span className="product-card-category-brand">
              {product.category}
              <span>{product.brand}</span>
            </span>

            <h3>{product.title}</h3>

            <span>★ {product.rating}</span>
          </div>

          <div className="product-card-content-bottom">
            <strong>R$ {product.price}</strong>
            {originalPrice && <span>R$ {originalPrice}</span>}
          </div>
        </div>
      </Link>

      <button type="button">+</button>
    </article>
  );
};

export default ProductCard;
