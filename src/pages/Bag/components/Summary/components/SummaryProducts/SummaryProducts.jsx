import React from 'react';
import './SummaryProducts.css';

const SummaryProducts = ({ products }) => {
  return (
    <ul className="summary-products">
      {products.map((product) => (
        <li className="summary-product" key={product.id}>
          <div className="summary-product-image">
            <img src={product.thumbnail} alt={`Imagem do produto ${product.title}`} />
          </div>

          <div className="summary-product-data">
            <div>
              <span className="summary-product-data-title" title={product.title}>
                {product.title}
              </span>
              <span className="summary-product-data-quantity">
                Quantidade: {product.quantity}
              </span>
            </div>

            <span className="summary-product-data-price">
              R$ {(product.price * product.quantity).toFixed(2).replace('.', ',')}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SummaryProducts;
