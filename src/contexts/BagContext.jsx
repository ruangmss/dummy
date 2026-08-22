import React from 'react';

export const BagContext = React.createContext();

export const BagProvider = ({ children }) => {
  const [bag, setBag] = React.useState(() => {
    const savedBag = localStorage.getItem('bag');
    return savedBag ? JSON.parse(savedBag) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag]);

  function addItem(id, quantity, stock) {
    setBag((bag) => {
      if (quantity <= 0 || stock <= 0) {
        return bag;
      }

      const product = bag.find((item) => item.id === id);

      // Quando encontra um produto já existente, retorna um novo array com a quantidade do produto atualizada
      if (product) {
        return bag.map((item) =>
          item.id === id && item.quantity + quantity <= stock
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      // Quando não encontra um produto já existente, simplesmente adiciona o novo produto e sua quantidade
      if (quantity <= stock) {
        return [...bag, { id, quantity }];
      }

      return bag;
    });
  }

  function removeItem(id) {
    setBag((bag) => {
      return bag.filter((item) => item.id !== id);
    });
  }

  function decreaseQuantity(id) {
    setBag((bag) => {
      return bag.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  }

  function increaseQuantity(id, stock) {
    setBag((bag) => {
      return bag.map((item) =>
        item.id === id && item.quantity < stock ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

  function cleanCart() {
    setBag([]);
  }

  return (
    <BagContext.Provider
      value={{
        bag,
        addItem,
        removeItem,
        decreaseQuantity,
        increaseQuantity,
        cleanCart,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};
