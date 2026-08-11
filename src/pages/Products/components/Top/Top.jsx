import React from 'react';
import './Top.css';
import { ToastContext } from '../../../../contexts/ToastContext';
import Search from '../../../../assets/icons/search.svg?react';

const Top = ({ query, sort, order, setQuery, setSort, setOrder, setSearch }) => {
  const showToast = React.useContext(ToastContext);

  function separateSort(event) {
    const [newSort, newOrder] = event.target.value.split('-');

    setSort(newSort);
    setOrder(newOrder);
  }

  function searchProduct(event) {
    event.preventDefault();

    if (query) {
      setSearch(query.trim());
    } else {
      setSearch('');
      showToast('fail', 'Insira caracteres para efetuar uma pesquisa.');
    }
  }

  return (
    <div className="container top">
      <h1>Catálogo de Produtos</h1>

      <form className="top-filters" onSubmit={searchProduct}>
        <div className="top-search">
          <input
            placeholder="Busque utilizando uma palavra chave..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <button type="submit" className="top-search-button" aria-label="Buscar produtos">
            <Search />
          </button>
        </div>

        <select value={sort && order ? `${sort}-${order}` : ''} onChange={separateSort}>
          <option value="">Selecione</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
          <option value="rating-desc">Melhor avaliação</option>
          <option value="title-asc">Nome: A-Z</option>
          <option value="title-desc">Nome: Z-A</option>
        </select>
      </form>
    </div>
  );
};

export default Top;
