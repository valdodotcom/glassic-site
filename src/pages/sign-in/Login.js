import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from '@firebase/auth';
import SubCard from '../../components/ui/SubCard';
import styles from '../../components/ui/Card.module.css';
import altStyles from '../../pages/store/Checkout.module.css';

const firebaseConfig = {
    apiKey: "AIzaSyDT73fQFTFvAYT_LK55fYLsUQpL60uf0eI",
    authDomain: "glassic-site.firebaseapp.com",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export default function LoginPage({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        if (isModalOpen) setIsModalOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // User authenticated successfully
                handleCloseModal();
                if (onLoginSuccess) {
                    onLoginSuccess();
                }
            })

            .catch((error) => {
                // Error occurred while authenticating user
                setErrorMessage(error.message);
            });
    };

    return (
        <>
        <div className={altStyles.centreCard}>
        <SubCard>
            <h3 style={{textAlign: 'center'}}>Login</h3>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className={altStyles.gridGap}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div className={styles.actions}>
                <button type="submit">Log in</button>
                </div>
            </form>
        </SubCard>
        </div>

        </>

    );
};

export { firebaseAuth };