import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../../pages/sign-in/Login';
import CartContext from '../../pages/store/cart-context';
import { signOut } from 'firebase/auth';
import styles from './MainNavigation.module.css';
import Modal from 'react-modal';
import LoginPage from '../../pages/sign-in/Login';
import altStyles from '../../components/ui/Card.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faShoppingBag, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';

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
      <img className={styles.logo} src="/glassic-icon.png" alt="Glassic Icon" />
      {/* <span className={styles.logoText}>Glassic Plaques</span> */}
    </Link>
      <nav>
        <ul>
        <li>
          <Link to={'/all-products'} className={styles.link}>
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className={styles.iconTag}>Products</span>
          </Link>
        </li>
        <li className={styles.cartIcon}>
        <Link to={'/cart'} className={styles.link}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className={styles.iconTag}>Cart</span>
          {cartItemCount > 0 && <span className={styles.badge}>{cartItemCount}</span>}
      </Link>
        </li>
        <li>
          {user ? (
            <Link onClick={handleLogout} className={styles.link}>
              <FontAwesomeIcon icon={faSignOut} />
              <span className={styles.iconTag}>Log Out</span>
            </Link>
          ) : (
            <Link onClick={() => setIsModalOpen(true)} className={styles.link}>
              <FontAwesomeIcon icon={faSignIn} />
              <span className={styles.iconTag}>Log In</span>
            </Link>
          )}
        </li>
        </ul>
      </nav>
      <Modal className={altStyles.customModal} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <LoginPage onClose={() => setIsModalOpen(false)} onLoginSuccess={handleLoginSuccess} />
      </Modal>
    </header>
  );
}
