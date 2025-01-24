import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListProducts from './pages/ListProducts'
import About from './pages/About'
import Products from './pages/Products'
import './App.css'

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
     
    </BrowserRouter>
  );
};

export default App
