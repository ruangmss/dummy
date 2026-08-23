import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Top from './components/Top/Top';
import { PRODUCTS_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import Catalog from './components/Catalog/Catalog';
import Error from '../../components/Error/Error';
import Pagination from './components/Pagination/Pagination';
import useHead from '../../hooks/useHead';

const Products = ({ category, headerSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = headerSearch || searchParams.get('search') || '';
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || 'asc';
  const page = Number(searchParams.get('page')) || 1;
  const [query, setQuery] = React.useState(search);
  const categoryName = category
    ? category.replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
    : '';
  const headTitle = headerSearch
    ? `Busca por "${headerSearch}" | Dummy`
    : category
      ? `${categoryName} | Dummy`
      : 'Produtos | Dummy';
  const headDescription = headerSearch
    ? `Confira os produtos encontrados para "${headerSearch}" na Dummy.`
    : category
      ? `Explore os produtos da categoria ${categoryName} disponíveis na Dummy.`
      : 'Explore o catálogo completo de produtos da Dummy e encontre as melhores opções para você.';

  useHead(headTitle, headDescription);

  const { data, request, loading, error } = useFetch();

  const products =
    category && search
      ? (data?.products?.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())) ?? [])
      : (data?.products ?? []);

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
        category,
      });

      await request(url, options);
    }

    fetchProducts();
  }, [request, sort, order, search, category]);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [page]);

  if (error) {
    return <Error error={error} />;
  }

  const itemsPerPage = 12;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentProducts = products.slice(start, end);
  const noSearchResults = products.length === 0 && search && !loading;

  if (totalPages > 0 && page > totalPages && !loading) {
    return <Error error={`Página ${page} não encontrada.`} />;
  }

  if (data || loading) {
    return (
      <>
        <Top
          disableSort={Boolean(noSearchResults)}
          headerSearch={headerSearch}
          search={search}
          query={query}
          sort={sort}
          order={order}
          setQuery={setQuery}
          setSort={setSort}
          setSearch={setSearch}
          category={category}
        />

        <Catalog
          products={currentProducts}
          loading={loading}
          search={search}
          allProducts={products}
          noSearchResults={Boolean(noSearchResults)}
        />

        <Pagination totalPages={totalPages} page={page} setPage={setPage} products={currentProducts} error={error} />
      </>
    );
  }

  return null;
};

export default Products;
