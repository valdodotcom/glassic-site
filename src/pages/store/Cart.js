import { useContext } from 'react';
import { useState } from 'react';
import CartContext from './cart-context';
import CartList from '../../components/cart/CartList';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../../pages/sign-in/Login';
import Modal from 'react-modal';
import LoginPage from '../../pages/sign-in/Login';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cartCtx = useContext(CartContext);
  const [user] = useAuthState(firebaseAuth);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        // cartCtx.clearCart();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <section>
      <h2>Your Cart</h2>
      {cartCtx.cartItems.length === 0 ? (
        <p>No items added yet!</p>
      ) : (
        <div>
          <CartList products={cartCtx.cartItems} />
          <p>Total: {cartCtx.totalPrice.toFixed(2)}</p>
          <button onClick={handleCheckout}>Force Checkout</button>

          {user ? (
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          ) : (
            <button onClick={() => setIsModalOpen(true)}>Proceed to Checkout</button>
          )}
          {!user && (
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
              <LoginPage onLoginSuccess={() => { setIsModalOpen(false); }} onClose={() => setIsModalOpen(false)} />
            </Modal>
          )}
        </div>
      )}
    </section>
  );

}
