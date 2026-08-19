import React from 'react';
import Top from './components/Top/Top';
import { PRODUCT_GET } from '../../api/api';
import { BagContext } from '../../contexts/BagContext';
import Products from './components/Products/Products';
import Summary from './components/Summary/Summary';
import Empty from './components/Empty/Empty';
import './Bag.css';

const Bag = () => {
  const [products, setProducts] = React.useState([]);
  const { bag } = React.useContext(BagContext);

  React.useEffect(() => {
    async function fetchBagProducts() {
      const products = await Promise.all(
        bag.map(async (item) => {
          const { url, options } = PRODUCT_GET(item.id);

          const response = await fetch(url, options);
          const product = await response.json();

          return {
            ...product,
            quantity: item.quantity,
          };
        }),
      );

      setProducts(products);
    }

    fetchBagProducts();
  }, [bag]);

  if (bag.length === 0) {
    return <Empty />;
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
