import { useContext, useState } from 'react'
import CartContext from '../../pages/store/cart-context';

export default function CartItem({ product }) {
  const cartCtx = useContext(CartContext);
  const itemIsInCart = cartCtx.itemIsInCart(product.id);

  function toggleCartStatusHandler() {
    cartCtx.removeFromCart(product.id);
  } 

  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Amount: {product.amount}</p>
        <button onClick={toggleCartStatusHandler}>
          {itemIsInCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </div>
  );
}
