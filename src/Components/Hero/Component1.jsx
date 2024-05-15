import React from 'react'

function Component1() {
  return (
    <section className='bg-cover bg-no-repeat h-[500px] min-w-[100%] flex flex-col justify-center items-start p-[30px] gap-[20px]' style={{backgroundImage: "url('/Hero/image1.jpg')"}}>
      <h4 className='font-medium text-[40px] text-black'>Shrimply The Best</h4>
      <h2 className='font-bold text-[60px] text-black'>Catch of the Day</h2>
      <p className='text-[40px] font-semibold text-[black]'>Junk for Once is not bad!</p>
      <div className='flex justify-start items-center gap-[10px]'>
        <button className='bg-[#1F7C3E] px-[30px] py-[15px] text-white rounded-md font-semibold'>Shop Now</button>
        <button className='bg-[#1F7C3E] px-[30px] py-[15px] text-white rounded-md font-semibold'>Junk Food & Drinks</button>
      </div>
    </section>
  )
}

export default Component1