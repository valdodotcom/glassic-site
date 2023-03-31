import Card from '../../components/ui/Card';
import styles from './Contact.module.css';

export default function ContactSection() {
  return (
    <Card>
    <section className={styles.contactSection}>
      <h2>Contact Us</h2>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <i className="fas fa-map-marker-alt"></i>
          <p>123 Main Street<br />Anytown, USA 12345</p>
        </div>
        <div className={styles.contactItem}>
          <i className="fas fa-envelope"></i>
          <p>contact@example.com</p>
        </div>
        <div className={styles.contactItem}>
          <a href="https://www.instagram.com/ourinstagram">
            <i className="fab fa-instagram"></i>
            <p>Follow us on Instagram</p>
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="https://www.twitter.com/ourtwitter">
            <i className="fab fa-twitter"></i>
            <p>Follow us on Twitter</p>
          </a>
        </div>
      </div>
      <form className={styles.contactForm}>
        <h3>Send Us a Message</h3>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
    </Card>
  );
}
