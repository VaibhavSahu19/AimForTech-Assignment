import React, { useContext } from 'react'
import { ProductsContext } from '../Context/ProductsContext';

function ProductInCart(props) {
    const productData = props.product;
    const {cart, addToCart, reduceQuantity, removeFromCart} = useContext(ProductsContext);

  return (
    <section className='flex px-[10px] gap-[10px] m-[5px]'>
        <div className='w-[80px]'>
            <img className='w-[100%]' src={productData.img} alt={`${productData.name} Image`} />
        </div>
        <div className='flex flex-col gap-[10px]'>
            <h3 className='font-bold'>{productData.name}</h3>
            <div className='font-semibold'>Subtotal: ${(productData.price * productData.qty/100)}</div>
            <div className='flex justify-start items-center  gap-[5px]'>
                <div className='flex bg-[#0C873F] px-[10px] items-center w-[70%] rounded-md gap-[10px]'>
                    <button onClick={() => reduceQuantity(props.product)} className='w-[33%]'>
                        <img src="/Cart/minus.svg" alt="decrease button" />
                    </button>
                    <div className='bg-white w-[33%] m-[2px] justify-center items-center text-center'>{productData.qty}</div>
                    <button onClick={() => addToCart(props.product)} className='w-[33%]'>
                        <img src="/Cart/add.svg" alt="increase button" />
                    </button>
                </div>
                <div onClick={() => removeFromCart(props.product.id)} className='cursor-pointer'>
                    <img src="/Cart/delete.svg" alt="delete button" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductInCart