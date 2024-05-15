import React from 'react'

function Footer() {
  return (
    <section className='flex bg-[#F2F4F3] flex-col justify-center gap-[30px] py-[30px] px-[60px] shadow-md'>
        <a href='/' className='flex self-center justify-center items-center gap-[5px]'>Back to Top <img src="/Footer/arrow-up.svg" alt="" /></a>
        <div className='flex flex-wrap justify-between'>
            <div className='flex gap-[10px] flex-col'>
                <h2 className='text-[35px] font-bold text-[#79A635]'>Canopy</h2>
                <p className='w-[300px]'>This is a demo store by Clean Canvas. All images and video content courtesy of Shutterstock and Pixels, and are not for re-use on other stores.</p>
                <div className='flex justify-normal items-center align-top gap-[20px] mt-[10px]'>
                    <a href="">
                        <img className='w-[25px]' src="/Footer/facebook.svg" alt="facebook" />
                    </a>
                    <a href="">
                        <img className='w-[25px]' src="/Footer/youtube.svg" alt="youtube" />
                    </a>
                    <a href="">
                        <img className='w-[25px]' src="/Footer/instagram.svg" alt="instagram" />
                    </a>
                    <a href="">
                        <img className='w-[25px]' src="/Footer/x.svg" alt="x" />
                    </a>
                </div>
            </div>
            <div className='w-[100px]'>
                <ul className='list-none text-md flex flex-col gap-[10px]'>
                    <li className='font-semibold'>All Departments</li>
                    <li>Fruit & Vegetables</li>
                    <li>Meat & Fish</li>
                    <li>Cheese & Dairy</li>
                    <li>Store Cupboard</li>
                    <li>The Bakery</li>
                </ul>
                
            </div>
            <div className='w-[100px]'>
                <ul className='list-none text-md flex flex-col gap-[10px]'>
                    <li className='font-semibold'>Help & Support</li>
                    <li>Customer Service</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Returns Info</li>
                </ul>
            </div>
            <div className='w-[300px]'>
                <ul className='list-none text-md flex flex-col gap-[10px]'>
                    <li className='font-semibold'>Recipes & Inspiration</li>
                    <li>Join our community to get exclusive offers, original recipes, event invites and more...</li>
                </ul>
                <div className='flex h-[40px] mt-[10px]'>
                    <input className='outline-none h-[100%] rounded-l-md px-[10px] py-[8px]' type="text" placeholder='Your email' />
                    <a className='h-[100%] flex items-center justify-center bg-[#0C893D] p-[10px] rounded-r-md' href="">
                        <img className=' h-[100%] rounded-r-md' src="/Footer/arrow-right.svg" alt="right arrow" />
                    </a>
                </div>
            </div>
        </div>
        <div className='flex gap-[30px]'>
            <select className='bg-[white] outline-none px-[20px] py-[10px] border-[2px]  w-[250px] rounded-[6px]' name="Currency" id="">
                <option value="">United States(USD $)</option>
            </select>
            <select className='bg-[white] outline-none p-[20px] w-[250px]  border-[2px] rounded-[6px]' name="Language" id="">
                <option value="">English</option>
            </select>
        </div>
    </section>
  )
}

export default Footer