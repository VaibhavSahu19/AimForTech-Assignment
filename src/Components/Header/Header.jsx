import React, { useContext } from 'react'
import canopyLogo from "/canopy-logo.png"
import micIcon from "/mic.svg"
import userIcon from "/user.svg"
import cartIcon from "/cart.svg"
import { ProductsContext } from '../Context/ProductsContext'

function Header() {
    const {cart} = useContext(ProductsContext);
  return (
    <nav className='flex justify-between bg-[#0B4A31] py-[20px] px-[50px]'>
        <a href="/">
            <img className='' src={canopyLogo} alt="canopy-logo" />
        </a>
        <div className='flex justify-center items-center '>
            <div className=''>
                <select className='outline-none h-[35px] px-[10px] text-[14px] rounded-l-[7px] bg-[#F4F4F5]' name="" id="">
                    <option value="">All</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>
            </div>
            <div className='flex justify-center items-center bg-white h-[35px] px-[10px] text-[14px] rounded-r-[7px]'>
                <input className='flex justify-between outline-none w-[300px]' type="text" placeholder='Search Groceries' />
                <img className='' src={micIcon} alt="mic-icon" />
            </div>
        </div>
        <div className='relative flex gap-[20px]'>
            <img className='' src={userIcon} alt="user-icon" />
            <img className='' src={cartIcon} alt="cart-icon" />
            <div className="absolute top-1 right-0 left-[55px] bg-white rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                <span className="text-black font-bold text-[10px]">{cart.length}</span>
            </div>
        </div>
    </nav>
  )
}

export default Header