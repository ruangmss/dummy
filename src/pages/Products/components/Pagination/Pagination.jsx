import React from 'react';
import './Pagination.css';
import useMedia from '../../../../hooks/useMedia';

const Pagination = ({ page, totalPages, setPage, products }) => {
  const mobile = useMedia('(max-width: 480px)');

  if (products.length >= 1) {
    return (
      <div className="container pagination">
        <button
          className="pagination-button"
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
        >
          Anterior
        </button>

        <span>{mobile ? `${page}/${totalPages}` : `Página ${page} de ${totalPages}`}</span>

        <button
          className="pagination-button"
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
        >
          Próxima
        </button>
      </div>
    );
  }
};

export default Pagination;
