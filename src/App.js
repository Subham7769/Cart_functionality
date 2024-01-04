import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Component/Home Page/HomePage'
import CartPage from './Component/Cart Page/CartPage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
