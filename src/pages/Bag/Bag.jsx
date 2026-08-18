import React from 'react';
import Top from './components/Top/Top';
import { PRODUCT_GET } from '../../api/api';
import { BagContext } from '../../contexts/BagContext';
import Products from './components/Products/Products';

const Bag = () => {
  const [checkout, setCheckout] = React.useState(false);
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

  return (
    <>
      <Top checkout={checkout} />
      <Products products={products} />
    </>
  );
};

export default Bag;
