import React from 'react';
import Top from './components/Top/Top';
import { PRODUCTS_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import Catalog from './components/Catalog/Catalog';
import Error from '../../components/Error/Error';

const Products = () => {
  const [query, setQuery] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState('');
  const [order, setOrder] = React.useState('asc');
  const [page, setPage] = React.useState(1);
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchProducts() {
      const { url, options } = PRODUCTS_GET({
        query: search,
        page: page,
        sortBy: sort,
        order: order,
        page: page,
        limit: 0,
      });
      await request(url, options);
    }

    fetchProducts();
  }, [request, page, sort, order, page, search]);

  if (error) {
    return <Error error={error} />;
  }

  if (data || loading) {
    return (
      <>
        <Top
          search={search}
          query={query}
          sort={sort}
          order={order}
          setQuery={setQuery}
          setSort={setSort}
          setOrder={setOrder}
          setSearch={setSearch}
        />

        <Catalog data={data} loading={loading} />
      </>
    );
  }
};

export default Products;
