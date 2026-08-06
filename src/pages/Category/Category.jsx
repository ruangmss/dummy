import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';

const Category = () => {
  const { category } = useParams();
  const { data, request, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchProducts() {
      const { url, options } = PRODUCTS_GET({ category: category });
      await request(url, options);
    }

    fetchProducts();
  }, [request, category]);

  if (data) {
    console.log(data);
    return <div>Teste</div>;
  }
};

export default Category;
