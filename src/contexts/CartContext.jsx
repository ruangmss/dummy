import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addItem(id, quantity, stock) {
    setCart((cart) => {
      if (quantity <= 0 || stock <= 0) {
        return cart;
      }

      const product = cart.find((item) => item.id === id);

      // Quando encontra um produto já existente, retorna um novo array com a quantidade do produto atualizada
      if (product) {
        return cart.map((item) =>
          item.id === id && item.quantity + quantity <= stock ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      // Quando não encontra um produto já existente, simplesmente adiciona o novo produto e sua quantidade
      if (quantity <= stock) {
        return [...cart, { id, quantity }];
      }

      return cart;
    });
  }

  function removeItem(id) {
    setCart((cart) => {
      return cart.filter((item) => item.id !== id);
    });
  }

  function decreaseQuantity(id) {
    setCart((cart) => {
      return cart.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  }

  function increaseQuantity(id, stock) {
    setCart((cart) => {
      return cart.map((item) =>
        item.id === id && item.quantity < stock ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
