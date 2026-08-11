import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { PRODUCT_GET } from '../../api/api';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Content from './components/Content/Content';
import Reviews from './components/Reviews/Reviews';
import ReletadProducts from './components/ReletadProducts/ReletadProducts';

const Product = () => {
  const { id } = useParams();
  const { data, request, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchProduct() {
      const { url, options } = PRODUCT_GET(id);
      await request(url, options);
    }

    fetchProduct();
  }, [id, request]);

  if (data) {
    return (
      <article className="product">
        <Breadcrumb product={data} />
        <Content product={data} />
        <Reviews product={data} />
        <ReletadProducts product={data} />
      </article>
    );
  }
};

export default Product;
