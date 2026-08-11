import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';
import './ProductSkeleton.css';

const ProductSkeleton = () => {
  return (
    <article className="product-skeleton" aria-label="Carregando produto" aria-busy="true">
      <div className="product-skeleton-breadcrumb container">
        <span className="skeleton" />
        <span className="skeleton" />
        <span className="skeleton" />
      </div>

      <div className="product-skeleton-content container">
        <div className="product-skeleton-gallery">
          <div className="product-skeleton-main-image skeleton" />
          <div className="product-skeleton-thumbnails">
            {Array.from({ length: 3 }).map((_, index) => (
              <span className="skeleton" key={index} />
            ))}
          </div>
        </div>

        <div className="product-skeleton-details">
          <div className="product-skeleton-tags">
            <span className="skeleton" />
            <span className="skeleton" />
            <span className="skeleton" />
          </div>
          <div className="product-skeleton-info">
            <h1 className="skeleton" />
            <span className="product-skeleton-rating skeleton" />
            <strong className="skeleton" />
            <span className="product-skeleton-saving skeleton" />
          </div>
          <hr />
          <div className="product-skeleton-description">
            <span className="skeleton" />
            <span className="skeleton" />
            <span className="skeleton" />
          </div>
          <div className="product-skeleton-benefits">
            <span className="skeleton" />
            <span className="skeleton" />
          </div>
          <hr />
          <div className="product-skeleton-actions">
            <span className="skeleton" />
            <span className="skeleton" />
          </div>
        </div>
      </div>

      <section className="product-skeleton-reviews container section">
        <h2 className="skeleton" />
        <div className="product-skeleton-review-list">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="product-skeleton-review" key={index}>
              <div>
                <span className="product-skeleton-avatar skeleton" />
                <span className="product-skeleton-reviewer skeleton" />
              </div>
              <span className="skeleton" />
              <span className="skeleton" />
            </div>
          ))}
        </div>
      </section>

      <section className="product-skeleton-related container section">
        <h2 className="skeleton" />
        <div className="product-skeleton-card-list">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default ProductSkeleton;
