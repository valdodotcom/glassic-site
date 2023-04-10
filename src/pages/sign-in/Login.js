// import firebase from 'firebase/app/';
// import 'firebase/auth';

export default function LoginPage () {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // User authenticated successfully
//       })
//       .catch((error) => {
//         // Error occurred while authenticating user
//       });
//   };

  return (
    <div>
        <h2>Login Page</h2>
        <p>Hello</p>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //   <button type="submit">Log in</button>
    // </form>
  );
};
