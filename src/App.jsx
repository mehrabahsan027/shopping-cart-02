import React, { useState } from "react";
import Navbar from "./components/Navbar";

import Products from "./components/Products";
import Cart from "./components/Cart";

import Search from "./components/Search";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMyContext } from "./context/context";

function App() {
  const { data } = useMyContext();

  console.log(data);

  return (
    <div className="min-h-screen dark:text-white">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products products={data} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
