import { useContext } from 'react';
import CartContext from './cart-context';
import CartList from '../../components/cart/CartList';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cartCtx = useContext(CartContext);

  const handleCheckout = () => {
    const orderData = {
      items: cartCtx.cartItems,
      totalPrice: cartCtx.totalPrice.toFixed(2),
    };

    fetch('https://glassic-site-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not add order');
      }
      cartCtx.clearCart();
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <section>
      <h2>Your Cart</h2>
      <CartList products={cartCtx.cartItems} />
      <p>Total: {cartCtx.totalPrice.toFixed(2)}</p>
      <Link to="/checkout">
      <button onClick={handleCheckout}>Proceed to Checkout</button>
      </Link>
    </section>
  );
}
