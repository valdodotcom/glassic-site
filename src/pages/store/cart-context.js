import { createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  function addItemHandler(item) {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const existingItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === item.id);
      const existingItem = updatedItems[existingItemIndex];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push(item);
      }

      return updatedItems;
    });

    setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price * item.amount);
  }

  function removeItemHandler(id) {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);
      const existingItem = prevItems[existingItemIndex];
      const updatedTotalAmount = totalAmount - existingItem.price;
  
      if (existingItem.amount === 1) {
        return prevItems.filter((item) => item.id !== id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
        return updatedItems;
      }
      setTotalAmount((prevTotalAmount) => prevTotalAmount - existingItem.price);

    });
  
  }
  

  function clearCartHandler() {
    setCartItems([]);
    setTotalAmount(0);
  }

  const cartContext = {
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartContext;