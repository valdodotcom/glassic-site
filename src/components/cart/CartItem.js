import { useContext, useState } from 'react';
import CartContext from '../../pages/store/cart-context';
import classes from './CartItem.module.css';

export default function CartItem({ product }) {
  const cartCtx = useContext(CartContext);
  const itemIsInCart = cartCtx.itemIsInCart(product.id);
  const [amount, setAmount] = useState(product.amount);

  function toggleCartStatusHandler() {
    cartCtx.removeFromCart(product.id);
  }

  function decreaseAmountHandler() {
    const newAmount = Math.max(amount - 1, 1);
    setAmount(newAmount);
    cartCtx.updateItemAmount(product.id, newAmount);
  }
  
  function increaseAmountHandler() {
    const newAmount = Math.min(amount + 1, 10);
    setAmount(newAmount);
    cartCtx.updateItemAmount(product.id, newAmount);
  }
  
  function amountInputChangeHandler(event) {
    const newAmount = parseInt(event.target.value);
    if (newAmount >= 1 && newAmount <= 10) {
      setAmount(newAmount);
      cartCtx.updateItemAmount(product.id, newAmount);
    }
  }

  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={classes.content}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price.toFixed(2)}</p>
        <label htmlFor={`amount-${product.id}`}>Amount:</label>
        <div className={classes.inputGroup}>
          <button onClick={decreaseAmountHandler}>-</button>
          <input
            type="number"
            id={`amount-${product.id}`}
            value={amount}
            onChange={amountInputChangeHandler}
            min="1"
            max="10"
          />
          <button onClick={increaseAmountHandler}>+</button>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleCartStatusHandler}>
          {itemIsInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
