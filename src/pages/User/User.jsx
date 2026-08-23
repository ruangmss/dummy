import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import Hero from './components/Hero/Hero';
import Data from './components/Data/Data';
import Error from '../../components/Error/Error';
import Spinner from '../../components/Spinner/Spinner';
import useHead from '../../hooks/useHead';

const User = () => {
  const { data, userLogout, login, loading } = React.useContext(UserContext);

  useHead('Minha Conta | Dummy', 'Consulte seus dados pessoais e gerencie sua conta na Dummy.');

  if (loading || login === null) {
    return <Spinner />;
  }

  if (!login) {
    return (
      <Error error={'Você não está logado. Por favor, efetue o login para acessar esta rota.'} />
    );
  }

  return (
    <>
      <Hero data={data} userLogout={userLogout} />
      <Data data={data} />
    </>
  );
};

export default User;
