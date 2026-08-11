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

const Product = () => {
  const { id } = useParams();
  const { data, request, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchProduct() {
      const { url, options } = PRODUCT_GET(id);
      await request(url, options);
    }

    window.scrollTo(0, 0);

    fetchProduct();
  }, [id, request]);

  if (loading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return (
      <Error
        error={
          'Ocorreu um erro no carregamento do produto. Tente novamente mais tarde e se o erro persistir, entre em contato com a equipe de desenvolvimento.'
        }
      />
    );
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
