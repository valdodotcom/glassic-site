import styles from './Card.module.css';


export default function SubCard(props) {
    return <div className={styles.subCard}>
      {props.children}
    </div>;
  }