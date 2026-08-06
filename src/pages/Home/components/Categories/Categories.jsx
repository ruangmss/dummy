import React from 'react';
import { Link } from 'react-router-dom';
import Beauty from '../../../../assets/icons/beauty.svg?react';
import Fragrances from '../../../../assets/icons/fragrances.svg?react';
import Furniture from '../../../../assets/icons/furniture.svg?react';
import Groceries from '../../../../assets/icons/groceries.svg?react';
import Home from '../../../../assets/icons/home.svg?react';
import Kitchen from '../../../../assets/icons/kitchen.svg?react';
import Laptop from '../../../../assets/icons/laptop.svg?react';
import Shirt from '../../../../assets/icons/shirt.svg?react';
import './Categories.css';

const Categories = () => {
  return (
    <section className="categories container section">
      <div className="section-top">
        <div>
          <span>Navegue e descubra</span>
          <h2>Categoria</h2>
        </div>

        <Link to="./categorias">
          Ver todas <span>→</span>
        </Link>
      </div>

      <div className="categories-items">
        <Link to="/categoria/beauty" className="categorie">
          <Beauty alt="Ícone de beleza" />
          <span>Beleza</span>
        </Link>

        <Link to="/categoria/fragrances" className="categorie">
          <Fragrances alt="Ícone de fragrância" />
          <span>Perfumaria</span>
        </Link>

        <Link to="/categoria/furniture" className="categorie">
          <Furniture alt="Ícone de mobília" />
          <span>Mobília</span>
        </Link>

        <Link to="/categoria/groceries" className="categorie">
          <Groceries alt="Ícone de alimentação" />
          <span>Alimentação</span>
        </Link>

        <Link to="/categoria/home-decoration" className="categorie">
          <Home alt="Ícone de casa" />
          <span>Decoração</span>
        </Link>

        <Link to="/categoria/kitchen-accessories" className="categorie">
          <Kitchen alt="Ícone de cozinha" />
          <span>Cozinha</span>
        </Link>

        <Link to="/categoria/laptops" className="categorie">
          <Laptop alt="Ícone de laptop" />
          <span>Laptops</span>
        </Link>

        <Link to="/categoria/mens-shirts" className="categorie">
          <Shirt alt="Ícone de camisa masculina" />
          <span>Camisas</span>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
