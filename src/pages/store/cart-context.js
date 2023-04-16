import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  totalCartItems: 0,
  totalPrice: 0,
  addToCart: (cartItem) => {},
  removeFromCart: (productId) => {},
  itemIsInCart: (productId) => {},
  updateItemAmount: (productId, newAmount) => {},
  clearCart: () => {}
});

export function CartContextProvider(props) {
  const [userCartItems, setUserCartItems] = useState([]);

  function addToCartHandler(cartItem) {
    setUserCartItems((prevUserCartItems) => {
      return prevUserCartItems.concat(cartItem);
    })
  }

  function removeFromCartHandler(productId) {
    setUserCartItems(prevUserCartItems => {
      return prevUserCartItems.filter(item => item.id !== productId);
    })
  }

  function itemIsInCartHandler(productId) {
    return userCartItems.some(item => item.id === productId);
  }

  function updateItemAmountHandler(productId, newAmount) {
    setUserCartItems(prevUserCartItems => {
      return prevUserCartItems.map(item => {
        if (item.id === productId) {
          return {
            ...item,
            amount: newAmount
          };
        }
        return item;
      });
    });
  }

  function clearCartHandler() {
    setUserCartItems([]);
  }

  const context = {
    cartItems: userCartItems,
    totalCartItems: userCartItems.length,
    totalPrice: userCartItems.reduce((total, item) => total + item.price * item.amount, 0),
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    itemIsInCart: itemIsInCartHandler,
    updateItemAmount: updateItemAmountHandler,
    clearCart: clearCartHandler
  };

  return <CartContext.Provider value={context}>
    {props.children}
  </CartContext.Provider>
}

export default CartContext;
