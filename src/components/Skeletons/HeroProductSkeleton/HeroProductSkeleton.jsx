import React from 'react';
import './HeroProductSkeleton.css';

const HeroProductSkeleton = () => {
  return (
    <div className="hero-product-skeleton">
      <div className="hero-product-skeleton-image skeleton" />
      <div className="hero-product-skeleton-title skeleton" />
      <div className="hero-product-skeleton-price skeleton" />
      <div className="hero-product-skeleton-rating skeleton" />
    </div>
  );
};

export default HeroProductSkeleton;
