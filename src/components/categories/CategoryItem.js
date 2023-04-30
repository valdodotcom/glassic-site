import styles from '../ui/Card.module.css'

export default function CategoryItem({ category }) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={category.image} alt={category.name} />
      </div>
    <h4>{category.name}</h4>
    <p>{category.description}</p>
  </div>

  );
}
