import styles from './Checkout.module.css';

export default function CheckoutPage() {
  return (
    <section className={styles.checkoutSection}>
      <h2>Checkout</h2>
      <form className={styles.checkoutForm}>
        <h3>Billing Information</h3>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" required />
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" required />
        <label htmlFor="zip">Zip Code:</label>
        <input type="text" id="zip" name="zip" required />
        <h3>Payment Information</h3>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" required />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" required />
        <button type="submit">Place Order</button>
      </form>
    </section>
  );
}
