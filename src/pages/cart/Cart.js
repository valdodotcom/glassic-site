import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 1, name: 'Product A', price: 9.99, quantity: 2 },
    { id: 2, name: 'Product B', price: 14.99, quantity: 1 },
    { id: 3, name: 'Product C', price: 19.99, quantity: 3 },
  ]);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const incrementQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  const decrementQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(updatedItems);
  };

  const total = items.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <section className={styles.cartPage}>
      <h2>Your Cart</h2>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button
                  className={styles.quantityButton}
                  onClick={() => decrementQuantity(item.id)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total:</td>
            <td colSpan="2">${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </section>
  );
}
