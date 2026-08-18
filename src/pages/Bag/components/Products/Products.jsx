import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { BagContext } from '../../../../contexts/BagContext';
import { ToastContext } from '../../../../contexts/ToastContext';

const Products = ({ products }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = React.useContext(BagContext);
  const showToast = React.useContext(ToastContext);

  function removeProduct(product) {
    removeItem(product.id);
    showToast('info', `${product.title} removido da sacola.`);
  }

  return (
    <ul className="container bag-products">
      {products.map((product) => {
        const productPrice = product.price * product.quantity;

        return (
          <li key={product.id} className="bag-product">
            <div className="bag-product-left">
              <Link to={`/produto/${product.id}`} className="bag-product-image-bg">
                <img src={product.thumbnail} alt={`Imagem do produto ${product.title}`} />
              </Link>

              <div className="bag-product-data">
                <span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>

                <Link to={`/produto/${product.id}`}>{product.title}</Link>

                <span className="bag-product-discount">
                  - {product.discountPercentage.toFixed(1).replace('.', ',')}%
                </span>

                <div className="bag-product-data-buttons">
                  <button type="button" onClick={() => decreaseQuantity(product.id)} disabled={product.quantity === 1}>
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    type="button"
                    onClick={() => increaseQuantity(product.id, product.stock)}
                    disabled={product.stock === product.quantity}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="bag-product-right">
              <strong>R$ {productPrice.toFixed(2).replace('.', ',')}</strong>
              <span>R$ {product.price.toFixed(2).replace('.', ',')} cada</span>
            </div>

            <button type="button" className="bag-product-close-btn" onClick={() => removeProduct(product)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
