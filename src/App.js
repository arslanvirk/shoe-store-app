import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Product from './Components/Product';
import ProductIndex from './Components/ProductIndex';
import ProductDetails from './Components/ProductDetails';

function HeaderTitle() {
  return (
    <h1>Home of Shoe Store Shoes</h1>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<HeaderTitle />} />
        <Route path="Product" element={<Product />}>
          <Route path="/" element={<ProductIndex />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
