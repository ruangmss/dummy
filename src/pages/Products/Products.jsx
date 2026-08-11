import React from 'react';
import Top from './components/Top/Top';
import { PRODUCTS_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import Catalog from './components/Catalog/Catalog';
import Error from '../../components/Error/Error';
import Pagination from './components/Pagination/Pagination';

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
        sortBy: sort,
        order: order,
        limit: 0,
      });
      await request(url, options);
    }

    fetchProducts();
  }, [request, sort, order, page, search]);

  if (error) {
    return <Error error={error} />;
  }

  const itemsPerPage = 12;
  const totalProducts = data?.products?.length ?? 0;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentProducts = data?.products?.slice(start, end) ?? [];

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

        <Catalog products={currentProducts} loading={loading} data={data} />
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      </>
    );
  }
};

export default Products;
