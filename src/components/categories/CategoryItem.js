import styles from './CategoryItem.module.css'

export default function CategoryItem({ category }) {
  return (
    <div className={styles.category}>

    <img src={category.image} alt={category.name} />
    <h3>{category.name}</h3>
    <p>{category.description}</p>
  </div>
  );
}
