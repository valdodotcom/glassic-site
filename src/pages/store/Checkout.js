import { useContext, useState } from 'react';
import CartContext from './cart-context';
import styles from './Checkout.module.css';
import altStyles from '../../components/ui/Card.module.css';
import SubCard from "../../components/ui/SubCard";
import { useNavigate } from 'react-router';

export default function CheckoutPage() {
  const cartCtx = useContext(CartContext);
  const [billingInfo, setBillingInfo] = useState({});
  const navigate = useNavigate();

  const handleCheckout = (event) => {
    event.preventDefault();
    const orderData = {
      totalPrice: cartCtx.totalPrice.toFixed(2),
      items: cartCtx.cartItems,
      billing: billingInfo // add billingInfo to orderData
    };

    fetch('https://glassic-site-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Could not add order');
        }
        cartCtx.clearCart();
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleBillingInfoChange = (event) => {
    setBillingInfo({
      ...billingInfo,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <h2 className={styles.checkoutSectionh2}>Checkout</h2>
  
      <section className={styles.centreCard}>
        <SubCard className={styles.checkoutSection}>
          <form onSubmit={handleCheckout}>
          <h3 className={styles.checkoutSectionh3}>Billing Information</h3>
          <div className={styles.billingGrid}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" onChange={handleBillingInfoChange} required />
  
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" onChange={handleBillingInfoChange} required />
  
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleBillingInfoChange} required />
  
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" onChange={handleBillingInfoChange} required />
  
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" onChange={handleBillingInfoChange} required />
  
            <label htmlFor="region">Region:</label>
            <input type="text" id="region" name="region" onChange={handleBillingInfoChange} required />
          </div>
  
          <h3 className={styles.checkoutSectionh3}>Payment Information</h3>
          <div className={styles.paymentGrid}>
            <label htmlFor="phoneNumber">Phone Number (Calls):</label>
            <input type="text" id="phoneNumber" name="phoneNumber" required />
  
            <label htmlFor="mobileMoneyNumber">Mobile Money Number:</label>
            <input type="text" id="mobileMoneyNumber" name="mobileMoneyNumber" required />
          </div>
          <div className={altStyles.actions}>
            <button>Place Order</button>
          </div>
          </form>
        </SubCard>
      </section>
    </>
  );
  
}
