import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    // Your project's Firebase configuration here
    apiKey: "AIzaSyDT73fQFTFvAYT_LK55fYLsUQpL60uf0eI",
    authDomain: "glassic-site.firebaseapp.com",
    databaseURL: "https://glassic-site-default-rtdb.firebaseio.com",
    projectId: "glassic-site",
    storageBucket: "glassic-site.appspot.com",
    messagingSenderId: "174506103865",
    appId: "1:174506103865:web:65d8cad6d71f3896abe9e8",
    measurementId: "G-1RFW2J0SKE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export default function LoginPage({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
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
        <div>
            <h2>Login Page</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export { firebaseAuth };