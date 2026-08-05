import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q').toLowerCase().trim();
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchSearch() {
      const { url, options } = PRODUCTS_GET({ query: query, limit: 15 });
      const { json } = await request(url, options);

      console.log('JSON: ', json);
    }

    fetchSearch();
  }, [query, request]);

  return <div>Search</div>;
};

export default Search;
