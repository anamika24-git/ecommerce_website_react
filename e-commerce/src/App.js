import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Product';
import ProductDetails from './ProductDetails';
import NavBar from './NavBar';
import GiftCard from './GiftCard';
import Cart from './Cart';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/giftCard" element={<GiftCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
