import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../pages/store/cart-context';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  const cartCtx = useContext(CartContext);

  const cartItemCount = cartCtx.totalCartItems;

  return (
    <header className={classes.header}>
      <Link to={'/'}>
        <div className={classes.logo}>Glassics</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={'/all-products'}>Products</Link>
          </li>
          <li>
            <Link to={'/cart'}>
              Cart
              <span className={classes.badge}>{cartItemCount}</span>
            </Link>
          </li>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link to={'/login'}>Log Out</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
