import React from 'react';
import './Data.css';

const Data = ({ data }) => {
  return (
    <section className="container data-bg">
      <ul className="data">
        <li className="data-item">
          <strong>ID</strong>
          <span>{data?.id}</span>
        </li>

        <li className="data-item">
          <strong>Nome</strong>
          <span>{data?.firstName}</span>
        </li>

        <li className="data-item">
          <strong>Sobrenome</strong>
          <span>{data?.lastName}</span>
        </li>

        <li className="data-item">
          <strong>Usuário</strong>
          <span>{data?.username}</span>
        </li>

        <li className="data-item">
          <strong>E-mail</strong>
          <span>{data?.email}</span>
        </li>
      </ul>
    </section>
  );
};

export default Data;
