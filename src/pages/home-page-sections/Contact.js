import MainCard from '../../components/ui/MainCard';
import styles from '../../components/ui/Card.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import SubCard from '../../components/ui/SubCard';

export default function ContactSection() {
  const contactItems = [
    {
      icon: faMapMarkerAlt,
      info: "Accra, Ghana",
    },
    {
      icon: faEnvelope,
      info: "glassicplaques@gmail.com",
    },
    {
      icon: faInstagram,
      info: "@glassicplaques",
      link: "https://www.instagram.com/glassicplaques/",
    },
  ];
  return (
    <MainCard>
    <h3>Contact Us</h3>
    <section className={styles.sectionGrid}>
      {contactItems.map((item, index) => (
        <SubCard className={styles.contactItem} key={index}>
          <FontAwesomeIcon icon={item.icon} />
          {item.link ? (
            <a href={item.link}>
              <p>{item.info}</p>
            </a>
          ) : (
            <p>{item.info}</p>
          )}
        </SubCard>
      ))}
    </section>
    </MainCard>
  );
}
