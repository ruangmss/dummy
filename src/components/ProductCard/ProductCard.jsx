import React from 'react';
import { Link } from 'react-router-dom';
import { BagContext } from '../../contexts/BagContext';
import { ToastContext } from '../../contexts/ToastContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { bag, addItem } = React.useContext(BagContext);
  const showToast = React.useContext(ToastContext);
  const quantityInBag = bag.find((item) => item.id === product.id)?.quantity ?? 0;
  const hasDiscount = product.discountPercentage > 0;
  const lastUnits = product.stock <= 10 && product.stock > 0;
  const soldOut = product.stock === 0;
  let originalPrice = 0;

  if (hasDiscount) {
    originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
  }

  function addProduct() {
    if (quantityInBag >= product.stock) {
      showToast('fail', `Quantidade máxima de ${product.title} atingida.`);
      return;
    }

    addItem(product.id, 1, product.stock);
    showToast('success', `${product.title} adicionado à sacola!`);
  }

  return (
    <article className={`product-card ${soldOut ? 'sold-out' : ''}`}>
      <Link to={`/produto/${product.id}`}>
        <div className="product-card-image">
          <img src={product.thumbnail} alt={`Imagem do produto ${product.title}`} />
          {hasDiscount && (
            <span className="product-card-discount">- {product.discountPercentage.toFixed(1).replace('.', ',')}%</span>
          )}
          {lastUnits && <span className="product-card-last-units">Restante: {product.stock}</span>}
          {soldOut && <span className="product-card-last-units">Esgotado</span>}
        </div>

        <div className="product-card-content">
          <div className="product-card-content-top">
            <span className="product-card-category-brand">
              {product.category}
              <span>{product.brand}</span>
            </span>

            <h3>{product.title}</h3>

            <span>
              <span className="star">★</span> {product.rating}
            </span>
          </div>

          <div className="product-card-content-bottom">
            <strong>R$ {product.price.toFixed(2).replace('.', ',')}</strong>
            {originalPrice && <span>R$ {originalPrice.replace('.', ',')}</span>}
          </div>
        </div>
      </Link>

      <button type="button" disabled={soldOut} onClick={addProduct}>
        +
      </button>
    </article>
  );
};

export default ProductCard;
