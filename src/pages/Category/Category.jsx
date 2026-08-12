import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import Products from '../Products/Products';

const Category = () => {
  const { category } = useParams();

  return <Products category={category} />;
};

export default Category;
