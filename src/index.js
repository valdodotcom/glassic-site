import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './pages/store/cart-context';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT73fQFTFvAYT_LK55fYLsUQpL60uf0eI",
  authDomain: "glassic-site.firebaseapp.com",
  databaseURL: "https://glassic-site-default-rtdb.firebaseio.com",
  projectId: "glassic-site",
  storageBucket: "glassic-site.appspot.com",
  messagingSenderId: "174506103865",
  appId: "1:174506103865:web:65d8cad6d71f3896abe9e8",
  measurementId: "G-1RFW2J0SKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <BrowserRouter><App /></BrowserRouter>
  </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
