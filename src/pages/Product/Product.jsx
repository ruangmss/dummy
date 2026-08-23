import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { PRODUCT_GET } from '../../api/api';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Content from './components/Content/Content';
import Reviews from './components/Reviews/Reviews';
import ReletadProducts from './components/ReletadProducts/ReletadProducts';
import ProductSkeleton from '../../components/Skeletons/ProductSkeleton/ProductSkeleton';
import Error from '../../components/Error/Error';
import useHead from '../../hooks/useHead';

const Product = () => {
  const { id } = useParams();
  const { data, request, error, loading } = useFetch();

  useHead(
    data ? `${data.title} | Dummy` : 'Produto | Dummy',
    data?.description || 'Confira os detalhes, avaliações e produtos relacionados na Dummy.',
  );

  React.useEffect(() => {
    async function fetchProduct() {
      const { url, options } = PRODUCT_GET(id);
      await request(url, options);
    }

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    fetchProduct();
  }, [id, request]);

  if (loading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <Error error={error} />;
  }

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

  return null;
};

export default Product;
