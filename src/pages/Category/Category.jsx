import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_CATEGORIES_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import Products from '../Products/Products';
import Error from '../../components/Error/Error';
import Spinner from '../../components/Spinner/Spinner';

const Category = () => {
  const { category } = useParams();
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchCategories() {
      const { url, options } = PRODUCT_CATEGORIES_GET();
      await request(url, options);
    }

    fetchCategories();
  }, [request]);

  if (loading || (!data && !error)) {
    return <Spinner />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const categoryExists = data?.some((currentCategory) => currentCategory.slug === category);

  if (data && !categoryExists) {
    return <Error error={`Categoria "${category}" não encontrada.`} />;
  }

  if (categoryExists) {
    return <Products category={category} />;
  }

  return null;
};

export default Category;
