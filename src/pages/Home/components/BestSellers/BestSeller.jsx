import React from 'react';
import './BestSeller.css';
import useFetch from '../../../../hooks/useFetch';
import { PRODUCTS_GET } from '../../../../api/api';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import ProductCardSkeleton from '../../../../components/Skeletons/ProductCardSkeleton/ProductCardSkeleton';

const BestSeller = () => {
  const { data, request, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchProducts() {
      const { url, options } = PRODUCTS_GET({ sortBy: 'rating', limit: 8, order: 'desc', page: 5 });
      await request(url, options);
    }

    fetchProducts();
  }, [request]);

  return (
    <section className="best-sellers container section">
      <div className="section-top">
        <div>
          <span>Em destaque</span>
          <h2>Mais Vendidos</h2>
        </div>

        <Link to="/produtos">
          Ver todos <span>→</span>
        </Link>
      </div>

      <div className="best-sellers-products">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => <ProductCardSkeleton key={index} />)
          : data?.products?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
};

export default BestSeller;
