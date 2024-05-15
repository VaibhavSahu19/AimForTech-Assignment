import React from 'react'

function Component3() {
  return (
    <section className='bg-cover bg-no-repeat h-[500px] min-w-[100%] flex flex-col justify-center items-start p-[30px] gap-[20px]' style={{backgroundImage: "url('/Hero/image3.jpg')"}}>
      <h4 className='font-bold text-[40px] text-[black]'>A flavor explosion in every bite</h4>
      <h2 className='font-bold text-[80px] text-white'>Southwest Loaded Fries</h2>
      <p className='text-[40px] font-semibold text-[white]'>Junk for Once is not bad!</p>
      <div className='flex justify-start items-center gap-[10px]'>
        <button className='bg-[#1F7C3E] px-[30px] py-[15px] text-white rounded-md font-semibold'>Shop Here</button>
        <button className='bg-[#1F7C3E] px-[30px] py-[15px] text-white rounded-md font-semibold'>Junk Food & Drinks</button>
      </div>
    </section>
  )
}

export default Component3