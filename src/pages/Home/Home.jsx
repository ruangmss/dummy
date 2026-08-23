import React from 'react';
import Hero from './components/Hero/Hero';
import Attributes from './components/Attributes/Attributes';
import BestSeller from './components/BestSellers/BestSeller';
import Categories from './components/Categories/Categories';
import EmailRegistration from './components/EmailRegistration/EmailRegistration';
import useHead from '../../hooks/useHead';

const Home = () => {
  useHead('Dummy', 'Encontre produtos para beleza, casa, tecnologia, moda e muito mais na Dummy.');

  return (
    <>
      <Hero />
      <Attributes />
      <BestSeller />
      <Categories />
      <EmailRegistration />
    </>
  );
};

export default Home;
