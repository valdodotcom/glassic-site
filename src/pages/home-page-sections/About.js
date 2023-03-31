import classes from './About.module.css';
import Card from '../../components/ui/Card';

export default function AboutSection() {
    return (
        <Card>
      <section className={classes.aboutSection}>
        <h2>About Us</h2>
        <p>We are a team of music lovers and craft enthusiasts who have combined 
            our passions to create unique glass plaques with Apple Music/Spotify song 
            cards inscribed on them.</p>
        <p>Our goal is to provide you with a personalized and memorable way to 
            showcase your favorite songs and artists, whether it's a gift for 
            yourself or a loved one.</p>
        <h3>Our Process</h3>
        <p>Each of our glass plaques is handcrafted with care and attention to 
            detail. Our glass plaques are delicately crafted, providing you with 
            a one-of-a-kind display for your favorite songs and artists."</p>
        <p>Our team also carefully selects and inscribes each Apple Music/Spotify 
            song card to match your chosen song and style.</p>
        <h3>Our Mission</h3>
        <p>At Glassics, we are committed to providing you with exceptional 
            products and customer service. We strive to create a community of music 
            and art lovers who share our passion and values.</p>
        <p>Thank you for choosing Glassics. We look forward to helping you 
            create a one-of-a-kind music display that you can cherish for years to come.</p>
      </section>
      </Card>
    );
  }