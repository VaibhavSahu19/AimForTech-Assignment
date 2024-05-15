import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../Context/ProductsContext';
import ProductInCart from './ProductInCart';

function SideCart() {
  const { cart } = useContext(ProductsContext);
  const productsList = cart?.map((product, index) => {
    return <ProductInCart
      key={index}
      product={product}
    />
  });

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal whenever cart changes
    if (cart && cart.length > 0) {
      const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.qty), 0);
      };
      setSubTotal(calculateSubtotal());
    } else {
      setSubTotal(0); 
    }
  }, [cart]);

  return (
    <main className='flex flex-col px-[20px] py-[10px]'>
      <div className='flex justify-between text-md py-[10px] border-b-[2px]'>
        <h2 className='font-bold'>Your cart</h2>
        <a className='underline' href="">View Cart</a>
      </div>
      <div className='flex flex-col text-md py-[10px] gap-[20px]'>
        <div className='flex justify-between'>
          <div className=''>Subtotal</div>
          <div className='font-bold'>${(subTotal.toFixed(2))/100} USD</div>
        </div>
        <button className='flex self-center bg-[#0C893D] w-[100%] justify-center items-center py-[5px] rounded-[6px] text-white gap-[5px]'>
          <img className='' src='/cart.svg' alt='' />
          <div className=''>Checkout</div>
        </button>
      </div>
      <div className='flex text-center text-sm px-[5px] py-[20px]'>
        Spend $100 USD more for free shipping!
      </div>
      <div className=''>
        <h2 className='text-md font-bold'>Products ({cart.length})</h2>
        {productsList}
      </div>
    </main>
  )
}

export default SideCart;
