import MainCard from '../../components/ui/MainCard';
import styles from '../../components/ui/Card.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function ContactSection() {
  const contactItems = [
    {
      icon: faMapMarkerAlt,
      info: "123 Main Street\nAnytown, USA 12345",
    },
    {
      icon: faEnvelope,
      info: "contact@example.com",
    },
    {
      icon: faInstagram,
      info: "Follow us on Instagram",
      link: "https://www.instagram.com/ourinstagram",
    },
    {
      icon: faTwitter,
      info: "Follow us on Twitter",
      link: "https://www.twitter.com/ourtwitter",
    },
  ];
  return (
    <MainCard>
    <h2>Contact Us</h2>
    <section>
      <div className={styles.contactInfo}>
      {contactItems.map((item, index) => (
        <div className={styles.contactItem} key={index}>
          <FontAwesomeIcon icon={item.icon} />
          {item.link ? (
            <a href={item.link}>
              <p>{item.info}</p>
            </a>
          ) : (
            <p>{item.info}</p>
          )}
        </div>
      ))}
      </div>
    </section>
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
    </MainCard>
  );
}
