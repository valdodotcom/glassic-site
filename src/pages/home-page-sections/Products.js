import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import Card from '../../components/ui/Card';

export default function ProductsPage() {
  return (
    <Card>
    <div className={styles.homePage}>
      <h2 className={styles.heading}>Shop by Category</h2>
      <div className={styles.categories}>
        <div className={styles.category}>
          <img src="category1.jpg" alt="Category 1" />
          <h3>Category 1</h3>
          <p>Explore our collection of plaques featuring classic songs from various genres.</p>
        </div>
        <div className={styles.category}>
          <img src="category2.jpg" alt="Category 2" />
          <h3>Category 2</h3>
          <p>Discover our selection of plaques featuring contemporary hits and popular artists.</p>
        </div>
        <div className={styles.category}>
          <img src="category3.jpg" alt="Category 3" />
          <h3>Category 3</h3>
          <p>Find the perfect gift for the music lover in your life with our personalized plaques.</p>
        </div>
      </div>
      <div className={styles.shopAll}>
        <Link to="/products">Shop All Products</Link>
      </div>
    </div>
    </Card>
  );
}

