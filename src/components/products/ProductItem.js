import { useContext } from 'react';
import CartContext from '../../pages/store/cart-context';
import styles from './ProductItem.module.css';

export default function ProductItem({ product }) {
  const cartCtx = useContext(CartContext);
  const itemIsInCart = cartCtx.itemIsInCart(product.id);

  function toggleCartStatusHandler() {
    if (itemIsInCart) {
      cartCtx.removeFromCart(product.id);
    } else {
      cartCtx.addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        amount: 1
      });
    }
  }
  
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={toggleCartStatusHandler} className={styles['add-to-cart-btn']}>
          {itemIsInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
