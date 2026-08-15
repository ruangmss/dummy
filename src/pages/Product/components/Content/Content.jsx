import React from "react";
import "./Content.css";
import freight from "../../../../assets/icons/freight.svg";
import shield from "../../../../assets/icons/shield.svg";
import Bag from "../../../../assets/icons/bag.svg?react";

const Content = ({ product }) => {
  const [quantity, setQuantity] = React.useState(0);
  const [image, setImage] = React.useState(product.images[0]);
  const hasDiscount = product.discountPercentage > 0;
  const soldOut = product.stock === 0;
  let originalPrice = 0;

  if (hasDiscount) {
    originalPrice = (
      product.price /
      (1 - product.discountPercentage / 100)
    ).toFixed(2);
  }

  return (
    <div className="product-content container">
      <div className="product-content-images">
        <div className="product-content-active-image">
          <img src={image} alt={`Imagem do produto ${product.title}`} />
          {hasDiscount && (
            <span className="product-content-discount">
              - {product.discountPercentage.toFixed(1).replace(".", ",")}%
            </span>
          )}
        </div>

        {product.images.length > 1 && (
          <nav>
            <ul className="product-content-images-list">
              {product.images.map((productImage, index) => (
                <li
                  key={productImage}
                  className={`product-image ${productImage === image ? "active-photo" : ""}`}
                >
                  <button type="button" onClick={() => setImage(productImage)}>
                    <img
                      src={productImage}
                      alt={`Imagem ${index + 1} do produto ${product.title}`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <div className="product-content-general">
        <div className="product-content-top">
          <span className="product-content-category">
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </span>
          {product.brand && (
            <span className="product-content-brand">{product.brand}</span>
          )}
          <span className="product-content-stock">
            {soldOut ? "Esgotado" : `Estoque: ${product.stock}`}
          </span>
        </div>

        <div className="product-content-data">
          <h1>{product.title}</h1>

          <span className="product-content-data-rating">
            <span className="star">★</span> <span>{product.rating}</span>{" "}
            <span>({product.reviews.length})</span>
          </span>

          <strong>
            R$ {product.price.toFixed(2).replace(".", ",")}{" "}
            <span>{originalPrice.replace(".", ",")}</span>
          </strong>

          {originalPrice && (
            <span className="product-content-saving">
              Você economiza R${" "}
              {(originalPrice - product.price).toFixed(2).replace(".", ",")}!
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
            <button
              disabled={quantity === 0}
              onClick={() => setQuantity((quantity) => quantity - 1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              disabled={quantity === product.stock}
              onClick={() => setQuantity((quantity) => quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            className="product-content-cart-button"
            type="button"
            disabled={quantity > product.stock || quantity === 0}
          >
            {soldOut ? "" : <Bag />}
            {`${soldOut ? "Produto Esgotado" : "Adicionar à Sacola"}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
