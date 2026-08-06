import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import { PRODUCTS_GET } from '../../../../api/api';
import useFetch from '../../../../hooks/useFetch';

const Hero = () => {
  const { data, request, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchProducts() {
      const { url, options } = PRODUCTS_GET({ limit: 3, sortBy: 'rating', order: 'desc' });
      await request(url, options);
    }

    fetchProducts();
  }, [request]);

  return (
    <section className="hero-bg">
      <div className="hero container">
        <div className="hero-left">
          <div className="hero-texts">
            <h1>PRODUTOS PENSADOS PARA VOCÊ</h1>
            <p>Explore tecnologia, beleza, moda, decoração e diversas outras categorias em um só lugar.</p>
          </div>

          <nav className="hero-links">
            <Link to="/produtos">Explorar produtos</Link>
            <Link to="/categorias">Ver categorias</Link>
          </nav>

          <ul className="hero-attributes">
            <li>Diversas categorias</li>
            <li>Produtos bem avaliados</li>
            <li>Ofertas atualizadas</li>
          </ul>
        </div>

        <div className="hero-right">
          {data?.products?.map((product) => (
            <Link key={product.id} to={`/produto/${product.id}`}>
              <div>
                <img src={product.thumbnail} alt={product.title} />
              </div>

              <h3>{product.title}</h3>
              <span>R$ {product.price}</span>
              <span>★ {product.rating}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
