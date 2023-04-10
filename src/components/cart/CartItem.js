import { useContext, useState } from 'react';
import CartContext from '../../pages/store/cart-context';

export default function CartItem({ product }) {
  const cartCtx = useContext(CartContext);
  const itemIsInCart = cartCtx.itemIsInCart(product.id);
  const [amount, setAmount] = useState(product.amount);

  function toggleCartStatusHandler() {
    cartCtx.removeFromCart(product.id);
  }

  function decreaseAmountHandler() {
    setAmount(prevAmount => Math.max(prevAmount - 1, 1));
    cartCtx.updateItemAmount(product.id, amount - 1);
  }

  function increaseAmountHandler() {
    setAmount(prevAmount => Math.min(prevAmount + 1, 10));
    cartCtx.updateItemAmount(product.id, amount + 1);
  }

  function amountInputChangeHandler(event) {
    const newAmount = parseInt(event.target.value);
    if (newAmount >= 1 && newAmount <= 10) {
      setAmount(newAmount);
      cartCtx.updateItemAmount(product.id, newAmount);
    }
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price.toFixed(2)}</p>
      <label htmlFor={`amount-${product.id}`}>Amount:</label>
      <div className="input-group">
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
      <button onClick={toggleCartStatusHandler}>
        {itemIsInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}
