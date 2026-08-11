import React from 'react';
import './ReletadProducts.css';
import useFetch from '../../../../hooks/useFetch';
import { PRODUCTS_GET } from '../../../../api/api';
import ProductCard from '../../../../components/ProductCard/ProductCard';

const ReletadProducts = ({ product }) => {
  const { data, request, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchReletadProducts() {
      const { url, options } = PRODUCTS_GET({
        category: product.category,
        limit: 5,
      });
      await request(url, options);
    }

    fetchReletadProducts();
  }, [product, request]);

  if (data) {
    return (
      <section className="container reletad-products section">
        <h2>Produtos Relacionados</h2>

        <nav>
          <ul className="releted-products-list">
            {data.products
              .filter((currentProduct) => currentProduct.id !== product.id)
              .slice(0, 4)
              .map((currentProduct) => (
                <li key={currentProduct.id}>
                  <ProductCard product={currentProduct} />
                </li>
              ))}
          </ul>
        </nav>
      </section>
    );
  }
};

export default ReletadProducts;
