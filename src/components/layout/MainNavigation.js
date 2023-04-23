import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../../pages/sign-in/Login';
import CartContext from '../../pages/store/cart-context';
import { signOut } from 'firebase/auth';
import styles from './MainNavigation.module.css';
import Modal from 'react-modal';
import LoginPage from '../../pages/sign-in/Login';

Modal.setAppElement('#root');

export default function MainNavigation() {
  const cartCtx = useContext(CartContext);
  const cartItemCount = cartCtx.totalCartItems;
  const [user] = useAuthState(firebaseAuth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    signOut(firebaseAuth);
  };

  const handleLoginSuccess = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <div className={styles.logo}>Glassics</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={'/all-products'}>Products</Link>
          </li>
          <li>
            <Link to={'/cart'}>
              Cart
              <span className={styles.badge}>{cartItemCount}</span>
            </Link>
          </li>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
          <li>
            {user ? (
              <Link onClick={handleLogout}>Log Out</Link>
            ) : (
              <Link onClick={() => setIsModalOpen(true)}>Log In</Link>
            )}
          </li>
        </ul>
      </nav>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <LoginPage onClose={() => setIsModalOpen(false)} onLoginSuccess={handleLoginSuccess} />
      </Modal>
    </header>
  );
}
