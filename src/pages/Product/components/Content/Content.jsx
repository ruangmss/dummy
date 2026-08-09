import React from "react";
import "./Content.css";
import freight from "../../../../assets/icons/freight.svg";
import shield from "../../../../assets/icons/shield.svg";
import Bag from "../../../../assets/icons/bag.svg?react";

const Content = ({ product }) => {
  const hasDiscount = product.discountPercentage > 0;
  let originalPrice = 0;

  if (hasDiscount) {
    originalPrice = (
      product.price /
      (1 - product.discountPercentage / 100)
    ).toFixed(2);
  }

  return (
    <div className="product-content container">
      <div className="product-content-image">
        <img
          src={product.thumbnail}
          alt={`Imagem do produto ${product.title}`}
        />
      </div>

      <div className="product-content-general">
        <div className="product-content-top">
          <span className="product-content-category">
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </span>
          <span className="product-content-brand">{product.brand}</span>
          <span className="product-content-stock">
            Em estoque: {product.stock}
          </span>
        </div>

        <div className="product-content-data">
          <h1>{product.title}</h1>

          <span>
            ★ {product.rating} ({product.reviews.length})
          </span>

          <strong>
            R$ {product.price} {originalPrice && <span>{originalPrice}</span>}
          </strong>

          {originalPrice && (
            <span className="product-content-saving">
              Você economiza R$ {(originalPrice - product.price).toFixed(2)}!
            </span>
          )}
        </div>

        <hr />

        <div className="product-content-description">
          <p>{product.description}</p>
        </div>

        <ul className="product-content-benefits">
          <li>
            <img src={freight} alt="Ícone de frete" /> Entrega em até duas
            semanas
          </li>
          <li>
            <img src={shield} alt="Ícone de escudo" /> Um ano de garantia
          </li>
        </ul>

        <hr />

        <div className="product-content-shopping">
          <div className="product-content-quantity">
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>

          <button className="product-content-cart-button">
            <Bag />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
