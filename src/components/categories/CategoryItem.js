import styles from '../ui/Card.module.css'

export default function CategoryItem({ category }) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={category.image} alt={category.name} />
      </div>
    <h3>{category.name}</h3>
    <p>{category.description}</p>
  </div>

  );
}
