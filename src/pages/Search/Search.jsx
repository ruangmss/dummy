import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from '../../pages/Products/Products';
import Error from '../../components/Error/Error';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase().trim() || '';

  if (!query) {
    return <Error error="Nenhum termo de busca informado." />;
  }

  return <Products headerSearch={query} />;
};

export default Search;
