import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from '../../pages/Products/Products';
import Error from '../../components/Error/Error';
import useHead from '../../hooks/useHead';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase().trim() || '';

  useHead(
    query ? `Busca por "${query}" | Dummy` : 'Pesquisa | Dummy',
    query
      ? `Confira os produtos encontrados para "${query}" na Dummy.`
      : 'Pesquise produtos no catálogo da Dummy.',
  );

  if (!query) {
    return <Error error="Nenhum termo de busca informado." />;
  }

  return <Products headerSearch={query} />;
};

export default Search;
