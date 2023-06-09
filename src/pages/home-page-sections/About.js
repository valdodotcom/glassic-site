import styles from '../../components/ui/Card.module.css'
import MainCard from '../../components/ui/MainCard';
import SubCard from '../../components/ui/SubCard';

export default function AboutSection() {
    const aboutData = [
        {
          title: 'About Us',
          paragraphs: [
            'We are a team of music lovers and craft enthusiasts who have combined our passions to create unique glass plaques with Apple Music/Spotify song cards inscribed on them.',
            'Our goal is to provide you with a personalized and memorable way to showcase your favorite songs and artists, whether it\'s a gift for yourself or a loved one.'
          ],
          img: 'https://drive.google.com/uc?export=view&id=1FDH9BJy3RrYFTzAO2GCsAiPq8OMXU6P2'
        },
        {
          title: 'Our Process',
          paragraphs: [
            'Each of our glass plaques is handcrafted with care and attention to detail. Our glass plaques are delicately crafted, providing you with a one-of-a-kind display for your favorite songs and artists.',
            'Our team also carefully selects and inscribes each Apple Music/Spotify song card to match your chosen song and style.'
          ],
          img: 'https://drive.google.com/uc?export=view&id=1XYjGn0E5geD5EOyIhr1vO8-dUsKIvfv5'
        },
        {
          title: 'Our Mission',
          paragraphs: [
            'At Glassics, we are committed to providing you with exceptional products and customer service. We strive to create a community of music and art lovers who share our passion and values.',
            'Thank you for choosing Glassics. We look forward to helping you create a one-of-a-kind music display that you can cherish for years to come.'
          ],
          img: 'https://drive.google.com/uc?export=view&id=13oLFUnbPlxq-RVxKqf3lm8sfno3joaYG'
        }
      ];
      
      return (
        <MainCard>
          <section className={styles.sectionGrid}>
            {aboutData.map((section, index) => (
              <SubCard key={index}>
                <div className={styles.item}>
                <h3>{section.title}</h3>
                <div className={styles.image}>
                  <img src={section.img} alt={section.name} />
                </div>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                </div>

              </SubCard>
            ))}
          </section>
        </MainCard>
      );
  }