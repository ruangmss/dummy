import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import Hero from './components/Hero/Hero';
import Data from './components/Data/Data';
import Error from '../../components/Error/Error';

const User = () => {
  const { data, userLogout, login } = React.useContext(UserContext);

  if (!login) {
    return <Error error={'Você não está logado. Por favor, efetue o login para acessar esta rota.'} />;
  }

  return (
    <>
      <Hero data={data} userLogout={userLogout} />
      <Data data={data} />
    </>
  );
};

export default User;
