import styles from './BlogItem.module.css';

export default function BlogItem({ title, content }) {
  return (
    <div className={styles.blogItem}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
