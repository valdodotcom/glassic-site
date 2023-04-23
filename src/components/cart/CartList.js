import CartItem from './CartItem';
import styles from '../ui/Card.module.css'
import SubCard from '../ui/SubCard';

export default function CartList( {products} ) {
  return (
    <section className={styles.sectionGrid}>
      {products.map((product) => (
        <SubCard key={product.id}>
            <CartItem key={product.id} product={product} />
        </SubCard>
      ))}
    </section>
  );
}
