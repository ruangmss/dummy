import React from 'react';
import './ProductCardSkeleton.css';

const ProductCardSkeleton = () => {
  return (
    <article className="product-card-skeleton">
      <div className="product-card-skeleton-image skeleton" />

      <div className="product-card-skeleton-content">
        <div className="product-card-skeleton-top">
          <div className="product-card-skeleton-category">
            <span className="skeleton" />
            <span className="skeleton" />
          </div>

          <h3 className="skeleton" />

          <span className="product-card-skeleton-rating skeleton" />
        </div>

        <div className="product-card-skeleton-bottom">
          <div className="product-card-skeleton-prices">
            <strong className="skeleton" />
            <span className="skeleton" />
          </div>

          <span className="product-card-skeleton-button skeleton" />
        </div>
      </div>
    </article>
  );
};

export default ProductCardSkeleton;
