import React from 'react';
import useFetch from '../../hooks/useFetch';
import { PRODUCT_CATEGORIES_GET } from '../../api/api';
import { Link } from 'react-router-dom';
import './Categories.css';
import Error from '../../components/Error/Error';
import CategoriesSkeleton from '../../components/Skeletons/CategoriesSkeleton/CategoriesSkeleton';
import useHead from '../../hooks/useHead';

const categoryIcons = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
});

const Categories = () => {
  const { data, request, error, loading } = useFetch();

  useHead(
    'Categorias | Dummy',
    'Navegue pelas categorias de produtos da Dummy e encontre exatamente o que procura.',
  );

  React.useEffect(() => {
    async function fetchCategories() {
      const { url, options } = PRODUCT_CATEGORIES_GET();
      await request(url, options);
    }

    fetchCategories();
  }, [request]);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <CategoriesSkeleton />;
  }

  if (data) {
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
                    {Icon && <Icon />}
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    );
  }

  return null;
};

export default Categories;
