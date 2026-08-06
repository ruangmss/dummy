import React from 'react';
import Hero from './components/Hero/Hero';
import Attributes from './components/Attributes/Attributes';
import BestSeller from './components/BestSellers/BestSeller';
import Categories from './components/Categories/Categories';

const Home = () => {
  return (
    <>
      <Hero />
      <Attributes />
      <BestSeller />
      <Categories />
    </>
  );
};

export default Home;
