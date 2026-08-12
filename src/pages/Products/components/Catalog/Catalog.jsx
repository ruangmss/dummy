import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import ProductCardSkeleton from '../../../../components/Skeletons/ProductCardSkeleton/ProductCardSkeleton';
import './Catalog.css';

const Catalog = ({ products, loading, data }) => {
  return (
    <section className="container catalog">
      <span>{data?.products?.length} produtos encontrados</span>

      <div className="catalog-products">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => <ProductCardSkeleton key={index} />) // Cria um array de 8 posições
          : products?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
};

export default Catalog;
