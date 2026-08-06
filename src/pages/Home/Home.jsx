import React from 'react';
import Hero from './components/Hero/Hero';
import Attributes from './components/Attributes/Attributes';
import BestSeller from './components/BestSellers/BestSeller';

const Home = () => {
  return (
    <>
      <Hero />
      <Attributes />
      <BestSeller />
    </>
  );
};

export default Home;
