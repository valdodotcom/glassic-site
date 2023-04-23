import styles from './Card.module.css'

export default function MainCard(props) {
    return <div className={styles.mainCard}>
        {props.children}
    </div>
}