import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './cart-context';
import CartList from '../../components/cart/CartList';
import styles from './Cart.module.css';

export default function CartPage() {
  const { items, addItem, removeItem, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const total = items.reduce(
    (accumulator, item) => accumulator + item.price * item.amount,
    0
  );

  return (
    <section className={styles.cartPage}>
      <h2>Your Cart</h2>
      <CartList
        items={items}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
        total={total}
      />
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </section>
  );
}
