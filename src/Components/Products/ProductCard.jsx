import React, { useEffect, useState } from 'react'

function ProductCard(props) {
    const productData = props.product;
    const [randomNumber, setRandomNumber] = useState(0);
    useEffect(() => {
        setRandomNumber((Math.random() + 4).toFixed(1));
    }, [])
  return (
    <section className='flex flex-col justify-between align-text-bottom items-center text-center p-[10px] gap-[10px] min-w-[250px] border-[1px] border-[#dedede]'>
        <img className='object-contain w-[400px]' src={productData.img} alt={`${productData.name} image`} />
        <h2 className='text-[20px] font-bold'>{productData.name}</h2>
        <p className='text-[#b2b2b2] text-sm'>1.0 lb</p>
        <div className='flex justify-between w-[140px]'>
            <img className='w-[100px] object-contain' src="/Products/review.png" alt="stars image" />
            <div className=''>({randomNumber})</div>
        </div>
        <div className='mt-[20px]'>
            ${Math.floor((productData.price)/100)}
            <span className='text-[10px] align-text-top'>
                {(productData.price)%100}
            </span>       
        </div>
        <a className='w-[85%] align-text-center text-white h-[30px] bg-[#0C893D] rounded-[6px]' href="">+Cart</a>
    </section>
  )
}

export default ProductCard