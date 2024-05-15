import React from 'react'

function Component2() {
  return (
    <section className='bg-cover bg-no-repeat h-auto md:h-[500px] w-[100%] md:min-w-[100%] flex flex-col justify-center items-start p-[20px] md:p-[30px] gap-[10px] md:gap-[20px] ' style={{backgroundImage: "url('/Hero/image2.jpg')"}}>
      <h4 className='font-semibold text-[20px] md:text-[40px] text-[white]'>Taste & Authentic</h4>
      <h2 className='font-bold text-[35px] md:text-[60px] text-white'>Tastes & Spices</h2>
      <p className='text-[20px] md:text-[40px] font-semibold text-[white]'>Made the Traditional Way</p>
      <div className='flex flex-col md:flex-row justify-start items-center gap-[10px]'>
        <button className='bg-[#1F7C3E] px-[10px] md:px-[30px] py-[15px] text-white rounded-md font-semibold'>Shop Fruits & Vegetables</button>
        <button className='bg-[#1F7C3E] px-[10px] md:px-[30px] py-[15px] text-white rounded-md font-semibold'>Fresh Ingridents</button>
      </div>
    </section>
  )
}

export default Component2