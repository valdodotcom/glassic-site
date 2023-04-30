import { useContext } from 'react';
import { useState } from 'react';
import CartContext from './cart-context';
import CartList from '../../components/cart/CartList';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../../pages/sign-in/Login';
import Modal from 'react-modal';
import LoginPage from '../../pages/sign-in/Login';
import { Link } from 'react-router-dom';
import styles from '../../components/ui/Card.module.css';

export default function CartPage() {
  const cartCtx = useContext(CartContext);
  const [user] = useAuthState(firebaseAuth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <h2>Your Cart</h2>
      {cartCtx.cartItems.length === 0 ? (
        <p style={{paddingLeft: '2rem'}}>No items added yet!</p>
      ) : (
        <div>
          <CartList products={cartCtx.cartItems} />
          <div className={styles.centreAlign}>
            <p>Total: {cartCtx.totalPrice.toFixed(2)}</p>
          </div>

          {user ? (
          <div className={styles.actions}>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
          ) : (
            <div className={styles.actions}>
              <button onClick={() => setIsModalOpen(true)}>Proceed to Checkout</button>
            </div>
          )}
          {!user && (
            <Modal className={styles.customModal} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
              <LoginPage onLoginSuccess={() => { setIsModalOpen(false); }} onClose={() => setIsModalOpen(false)} />
            </Modal>
          )}
        </div>
      )}
    </section>
  );

}
