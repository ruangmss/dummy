import './CategoriesSkeleton.css';

const CategoriesSkeleton = () => {
  return (
    <section className="container section categories-skeleton">
      <h1>Categorias</h1>

      <div className="categories-skeleton-list">
        {Array.from({ length: 24 }).map((_, index) => (
          <div className="categories-skeleton-card" key={index}>
            <span className="categories-skeleton-icon skeleton" />
            <span className="categories-skeleton-name skeleton" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSkeleton;
