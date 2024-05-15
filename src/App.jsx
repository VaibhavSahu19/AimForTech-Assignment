import React, { useContext, useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Shop from './Components/Shop/Shop'
import ProductList from './Components/Products/ProductList'
import Footer from './Components/Footer/Footer'
import SideCart from './Components/Cart/SideCart'
import { ProductsContext } from './Components/Context/ProductsContext'

function App() {
  const {viewCart} = useContext(ProductsContext);
  return (
    <div className='flex'>
      <div className='flex-1 max-w-[80%]'>
        <Header />
        <Hero />
        <Shop />
        <ProductList />
        <Footer />
      </div>
      <div>
        {!viewCart && <SideCart />}
      </div>
    </div>
  )
}

export default App