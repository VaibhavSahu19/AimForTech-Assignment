import React from 'react'

function Component3() {
  return (
    <section className='bg-cover bg-no-repeat h-auto md:h-[500px] w-[100%] md:min-w-[100%] flex flex-col justify-center items-start p-[20px] md:p-[30px] gap-[10px] md:gap-[20px] ' style={{backgroundImage: "url('/Hero/image3.jpg')"}}>
      <h4 className='font-bold text-[20px] md:text-[40px] text-[white]'>A flavor explosion in every bite</h4>
      <h2 className='font-bold text-[35px] md:text-[60px] text-white'>Salad in Action</h2>
      <p className='text-[20px] md:text-[40px] font-semibold text-[white]'>Fresh & Sustainably caught</p>
      <div className='flex flex-col md:flex-row justify-start items-center gap-[10px]'>
        <button className='bg-[#1F7C3E] px-[10px] md:px-[30px] py-[15px] text-white rounded-md font-semibold'>Shop Here</button>
        <button className='bg-[#1F7C3E] px-[10px] md:px-[30px] py-[15px] text-white rounded-md font-semibold'>Store Cupboard</button>
      </div>
    </section>
  )
}

export default Component3