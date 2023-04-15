import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../pages/sign-in/Login';
import { useState, useEffect } from 'react';

export default function Protected({ children }) {
  const [authState, setAuthState] = useState('loading');
  const [user] = useAuthState(firebaseAuth);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowLoadingMessage(true);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (user !== null) {
      setAuthState(user);
    }
  }, [user]);

  if (authState === 'loading') {
    if (showLoadingMessage) {
      return <div>An error occurred with user authentication. Make sure you are logged in.</div>
    }
    return <div>Loading...</div>
  }

  if (!authState) {
    console.log(`User: ${user}`);
    return <Navigate to="/" replace />
  }

  return children;
}
