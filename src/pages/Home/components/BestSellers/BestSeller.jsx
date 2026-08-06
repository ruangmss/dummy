import React from 'react';
import './BestSeller.css';
import useFetch from '../../../../hooks/useFetch';
import { PRODUCTS_GET } from '../../../../api/api';
import ProductCard from '../../../../components/ProductCard/ProductCard';

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
      <div className="section-title">
        <span>Em destaque</span>
        <h2>Mais Vendidos</h2>
      </div>

      <div className="best-sellers-products">
        {data?.products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
