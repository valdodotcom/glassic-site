import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  totalCartItems: 0,
  addToCart: (cartItem) => {},
  removeFromCart: (productId) => {},
  itemIsInCart: (productId) => {}
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


  const context = {
    cartItems: userCartItems,
    totalCartItems: userCartItems.length,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    itemIsInCart: itemIsInCartHandler
  };

  return <CartContext.Provider value={context}>
    {props.children}
  </CartContext.Provider>
}

export default CartContext;