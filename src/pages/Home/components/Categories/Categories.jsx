import React from 'react';
import { Link } from 'react-router-dom';
import Beauty from '../../../../assets/icons/beauty.svg?react';
import Fragrances from '../../../../assets/icons/fragrances.svg?react';
import Furniture from '../../../../assets/icons/furniture.svg?react';
import Groceries from '../../../../assets/icons/groceries.svg?react';
import Home from '../../../../assets/icons/home-decoration.svg?react';
import Kitchen from '../../../../assets/icons/kitchen-accessories.svg?react';
import Laptop from '../../../../assets/icons/laptops.svg?react';
import Shirt from '../../../../assets/icons/mens-shirts.svg?react';
import './Categories.css';

const Categories = () => {
  return (
    <section className="categories container section">
      <div className="section-top">
        <div>
          <span>Navegue e descubra</span>
          <h2>Categorias</h2>
        </div>

        <Link to="./categorias">
          Ver todas <span>→</span>
        </Link>
      </div>

      <div className="categories-items">
        <Link to="/categoria/beauty" className="categorie">
          <Beauty alt="Ícone de beleza" />
          <span>Beauty</span>
        </Link>

        <Link to="/categoria/fragrances" className="categorie">
          <Fragrances alt="Ícone de fragrância" />
          <span>Fragrances</span>
        </Link>

        <Link to="/categoria/furniture" className="categorie">
          <Furniture alt="Ícone de mobília" />
          <span>Furniture</span>
        </Link>

        <Link to="/categoria/groceries" className="categorie">
          <Groceries alt="Ícone de alimentação" />
          <span>Groceries</span>
        </Link>

        <Link to="/categoria/home-decoration" className="categorie">
          <Home alt="Ícone de casa" />
          <span>Home Decoration</span>
        </Link>

        <Link to="/categoria/kitchen-accessories" className="categorie">
          <Kitchen alt="Ícone de cozinha" />
          <span>Kitchen Accessories</span>
        </Link>

        <Link to="/categoria/laptops" className="categorie">
          <Laptop alt="Ícone de laptop" />
          <span>Laptops</span>
        </Link>

        <Link to="/categoria/mens-shirts" className="categorie">
          <Shirt alt="Ícone de camisa masculina" />
          <span>Mens Shirts</span>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
