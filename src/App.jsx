import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Shop from './Components/Shop/Shop'
import ProductList from './Components/Products/ProductList'
import Footer from './Components/Footer/Footer'
import SideCart from './Components/Cart/SideCart'

function App() {
  const [isViewCart, setIsViewCart] = useState(false);
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
        {!isViewCart && <SideCart />}
      </div>
    </div>
  )
}

export default App