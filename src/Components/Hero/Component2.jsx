import React from 'react'

function Component2() {
  return (
    <section className='bg-cover bg-no-repeat h-[500px] min-w-[100%] flex flex-col justify-center items-center p-[30px] gap-[20px]' style={{backgroundImage: "url('/Hero/image2.jpg')"}}>
      <h4 className='font-semibold text-[40px] text-[white]'>Taste & Authentic</h4>
      <h2 className='font-bold text-[60px] text-white'>Tastes & Spices</h2>
      <p className='text-[40px] font-semibold text-[white]'>Made the Traditional Way</p>
      <div className='flex justify-start items-center gap-[10px]'>
        <button className='bg-[#1F7C3E] px-[30px] py-[15px] text-white rounded-md font-semibold'>Shop Fruits & Vegetables</button>
        <button className='bg-[#1F7C3E] px-[30px] py-[15px] text-white rounded-md font-semibold'>Fresh Ingridents</button>
      </div>
    </section>
  )
}

export default Component2