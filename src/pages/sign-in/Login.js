import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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

firebase.initializeApp(firebaseConfig);

export default function LoginPage() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // User authenticated successfully
            console.log("YESSS");
          })
          .catch((error) => {
            // Error occurred while authenticating user
            console.log("YAWA");
          });
      };

    return (
        <div>
            <h2>Login Page</h2>
            <p>Hello</p>
            <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Log in</button>
        </form>
        </div>

    );
};
