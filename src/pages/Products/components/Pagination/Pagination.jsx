import React from 'react';
import './Pagination.css';

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="container pagination">
      <button className="pagination-button" onClick={() => setPage(page - 1)} disabled={page <= 1}>
        <span>←</span> Anterior
      </button>

      <span>
        Página {page} de {totalPages}
      </span>

      <button className="pagination-button" onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
        Próxima <span>→</span>
      </button>
    </div>
  );
};

export default Pagination;
