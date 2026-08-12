import React from 'react';
import useFetch from '../../hooks/useFetch';
import { PRODUCT_CATEGORIES_GET } from '../../api/api';
import { Link } from 'react-router-dom';
import './Categories.css';

const categoryIcons = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
});

const Categories = () => {
  const { data, request, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchCategories() {
      const { url, options } = PRODUCT_CATEGORIES_GET();
      await request(url, options);
    }

    fetchCategories();
  }, [request]);

  return (
    <section className="container section categories">
      <h1>Categorias</h1>

      <nav>
        <ul className="categories-list">
          {data?.map((category) => {
            const Icon = categoryIcons[`../../assets/icons/${category.slug}.svg`];

            return (
              <li key={category.slug}>
                <Link to={`/categoria/${category.slug}`} className="categories-list-item">
                  {Icon && <Icon aria-hidden="true" />}
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Categories;
