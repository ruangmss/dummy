import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Top from './components/Top/Top';
import { PRODUCTS_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import Catalog from './components/Catalog/Catalog';
import Error from '../../components/Error/Error';
import Pagination from './components/Pagination/Pagination';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = React.useState('');
  const search = searchParams.get('search') || '';
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || 'asc';
  const page = Number(searchParams.get('page')) || 1;

  const { data, request, loading, error } = useFetch();

  function updateParam(name, value) {
    setSearchParams((params) => {
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params;
    });
  }

  function setSearch(value) {
    setSearchParams((params) => {
      if (value) {
        params.set('search', value);
      } else {
        params.delete('search');
      }

      params.set('page', 1);

      return params;
    });
  }

  function setSort(sort, order) {
    setSearchParams((params) => {
      if (sort) {
        params.set('sort', sort);
        params.set('order', order);
      } else {
        params.delete('sort');
        params.delete('order');
      }

      params.set('page', 1);

      return params;
    });
  }

  function setOrder(value) {
    setSearchParams((params) => {
      params.set('order', value);
      params.set('page', 1);

      return params;
    });
  }

  function setPage(value) {
    setSearchParams((params) => {
      params.set('page', value);

      return params;
    });
  }

  React.useEffect(() => {
    async function fetchProducts() {
      const { url, options } = PRODUCTS_GET({
        query: search,
        sortBy: sort,
        order,
        limit: 0,
      });

      await request(url, options);
    }

    fetchProducts();
  }, [request, sort, order, search]);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [page]);

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

        <Catalog products={currentProducts} loading={loading} data={data} search={search} />

        <Pagination totalPages={totalPages} page={page} setPage={setPage} products={currentProducts} />
      </>
    );
  }

  return null;
};

export default Products;
