import React from 'react';
import Top from './components/Top/Top';

const Bag = () => {
  const [checkout, setCheckout] = React.useState(false);

  return (
    <>
      <Top checkout={true} />
    </>
  );
};

export default Bag;
