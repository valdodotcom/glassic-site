import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/Blog';
import CartPage from './pages/store/Cart';
import Layout from './components/layout/Layout';
import CheckoutPage from './pages/store/Checkout';
import AllProductsPage from './pages/AllProducts';
import LoginPage from './pages/sign-in/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      </Layout>
  );
}

export default App;
