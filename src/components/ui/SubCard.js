import classes from './Card.module.css';


export default function SubCard(props) {
    return <div className={classes.subCard}>
      {props.children}
    </div>;
  }