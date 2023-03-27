import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'

export default function MainNavigation() {
    return <header className={classes.header}>
        <Link to={'/'}>
        <div className={classes.logo}>Glassics</div>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to={'/products'}>Products</Link>
                </li>
                <li>
                    <Link to={'/cart'}>
                        Cart
                        <span className={classes.badge}>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={'/blog'}>Blog</Link>
                </li>
                {/* <li>
                    <Link to={'/contact'}>Contact</Link>
                </li> */}
            </ul>
        </nav>
    </header>
}