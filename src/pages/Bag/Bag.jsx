import React from 'react';
import Top from './components/Top/Top';
import { PRODUCT_GET } from '../../api/api';
import { BagContext } from '../../contexts/BagContext';
import Products from './components/Products/Products';
import Summary from './components/Summary/Summary';
import Empty from './components/Empty/Empty';
import './Bag.css';
import Spinner from '../../components/Spinner/Spinner';
import Error from '../../components/Error/Error';

const Bag = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { bag } = React.useContext(BagContext);

  React.useEffect(() => {
    async function fetchBagProducts() {
      try {
        setLoading(true);
        setError(null);

        const products = await Promise.all(
          bag.map(async (item) => {
            const { url, options } = PRODUCT_GET(item.id);

            const response = await fetch(url, options);

            if (!response.ok) {
              throw new Error(`Erro ao buscar o produto ${item.id}.`);
            }

            const product = await response.json();

            return {
              ...product,
              quantity: item.quantity,
            };
          }),
        );

        setProducts(products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchBagProducts();
  }, [bag]);

  if (bag.length === 0) {
    return <Empty />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Top />
      <div className="bag-content container">
        <Products products={products} />
        <Summary products={products} />
      </div>
    </>
  );
};

export default Bag;
