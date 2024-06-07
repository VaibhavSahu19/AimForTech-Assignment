import React, { useContext, useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Shop from './Components/Shop/Shop'
import ProductList from './Components/Products/ProductList'
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart'
import { ProductsContext } from './Components/Context/ProductsContext'
import { Route, Routes } from 'react-router-dom';

function App() {
  const {viewCart} = useContext(ProductsContext);
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className=''>
            <Hero />
            <Shop />
            <ProductList />
            <Footer />
          </div>
        } />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>

  )
}

export default App