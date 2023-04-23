import SubCard from "../ui/SubCard";
import ProductItem from "./ProductItem";
import styles from '../ui/Card.module.css'

export default function ProductList({ products }) {
  return (
    <section className={styles.sectionGrid}>
      {products.map((product) => (
        <SubCard key={product.id}>
            <ProductItem key={product.id} product={product} />
        </SubCard>
      ))}
    </section>
  );
}
