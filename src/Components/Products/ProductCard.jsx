import React from 'react'

function ProductCard(props) {
    const productData = props.product;
    const randomNumber = (Math.random() + 4).toFixed(1);
  return (
    <section className='flex flex-col justify-between align-text-bottom items-center text-center p-[10px] gap-[10px] min-w-[250px] border-[1px] border-[gray]'>
        <img className='object-contain w-[400px]' src={productData.img} alt={`${productData.name} image`} />
        <h2 className=''>{productData.name}</h2>
        <p className=''>1.0 lb</p>
        <img className='' src="/Products/review.png" alt="stars image" />
        <div className=''>{randomNumber}</div>
        <div className=''>
            ${Math.floor((productData.price)/100)}
            <span className=''>
                {(productData.price)%100}
            </span>       
        </div>
        <a className='' href="">+Cart</a>

    </section>
  )
}

export default ProductCard