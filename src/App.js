import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProducts';
import BlogPage from './pages/Blog';
import CartPage from './pages/Cart';
import Layout from './components/layout/Layout';
import CheckoutPage from './pages/Checkout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      </Layout>
  );
}

export default App;
