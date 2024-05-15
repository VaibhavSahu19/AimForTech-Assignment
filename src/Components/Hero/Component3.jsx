import React from 'react'

function Component3() {
  return (
    <section className='bg-cover bg-no-repeat h-[500px] min-w-[100%] flex flex-col justify-center items-start p-[30px] gap-[20px]' style={{backgroundImage: "url('/Hero/image3.jpg')"}}>
      <h4 className='font-bold text-[40px] text-[white]'>A flavor explosion in every bite</h4>
      <h2 className='font-bold text-[60px] text-white'>Salad in Action</h2>
      <p className='text-[40px] font-semibold text-[white]'>Fresh & Sustainably caught</p>
      <div className='flex justify-start items-center gap-[10px]'>
        <button className='bg-[#1F7C3E] px-[30px] py-[15px] text-white rounded-md font-semibold'>Shop Here</button>
        <button className='bg-[#1F7C3E] px-[30px] py-[15px] text-white rounded-md font-semibold'>Store Cupboard</button>
      </div>
    </section>
  )
}

export default Component3