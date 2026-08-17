import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import Hero from './components/Hero/Hero';
import Data from './components/Data/Data';

const User = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <>
      <Hero data={data} userLogout={userLogout} />
      <Data data={data} />
    </>
  );
};

export default User;
