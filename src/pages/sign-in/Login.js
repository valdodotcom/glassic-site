// import { useState } from 'react';
// import { auth } from './firebase'; // Import the Firebase SDK

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     auth.signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // User signed in successfully
//         const user = userCredential.user;
//         console.log('User signed in:', user);
//       })
//       .catch((error) => {
//         // Handle sign-in errors
//         console.error('Sign-in error:', error);
//       });
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <button type="submit">Sign in</button>
//     </form>
//   );
// }
