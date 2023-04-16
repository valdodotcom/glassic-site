import classes from './Card.module.css'

export default function MainCard(props) {
    return <div className={classes.mainCard}>
        {props.children}
    </div>
}