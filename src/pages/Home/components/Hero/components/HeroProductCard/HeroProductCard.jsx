import { Link } from 'react-router-dom';
import './HeroProductCard.css';

const HeroProductCard = ({ product }) => {
  return (
    <Link className="hero-product-card" to={`/produto/${product.id}`}>
      <div className="hero-product-card-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <h3>{product.title}</h3>
      <span className="hero-product-card-price">R$ {product.price}</span>
      <span>★ {product.rating}</span>
    </Link>
  );
};

export default HeroProductCard;
