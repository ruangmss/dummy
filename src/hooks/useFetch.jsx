import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response = null;
    let json = null;

    try {
      setError('');
      setData(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Recurso não encontrado.');
        } else if (json.message) {
          throw new Error(json.message);
        }

        throw new Error(
          `Erro ao realizar a requisição. Status ${response.status}. Por favor, tente novamente e, se o problema persistir, entre em contato com a equipe de desenvolvimento.`,
        );
      }

      setData(json);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }

    return { response, json };
  }, []);

  return { request, data, error, loading };
};

export default useFetch;
