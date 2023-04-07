import styles from './CategoryName.module.css'

export default function CategoryName({ category }) {
  return (
    <div className={styles.category}>
    <h4>{category.name}</h4>
  </div>
  );
}
