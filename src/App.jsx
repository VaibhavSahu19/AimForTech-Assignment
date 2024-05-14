import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Shop from './Components/Shop/Shop'
import ProductList from './Components/Products/ProductList'
import Footer from './Components/Footer/Footer'

function App() {
  const [isViewCart, setIsViewCart] = useState(false);
  return (
    <div>
      <Header />
      <Hero />
      <Shop />
      <ProductList />
      <Footer />
    </div>
  )
}

export default App