import styles from './CartItem.module.css';

export default function CartItem({
  item,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) {
  return (
    <table>
        <tbody>
        <tr>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>
          <button
            className={styles.quantityButton}
            onClick={() => decrementQuantity(item.id)}
            disabled={item.amount === 1}
          >
            -
          </button>
          <span>{item.amount}</span>
          <button
            className={styles.quantityButton}
            onClick={() => incrementQuantity(item.id)}
          >
            +
          </button>
        </td>
        <td>${(item.price * item.amount)}</td>
        <td>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </td>
      </tr>
        </tbody>

    </table>
  );
}
