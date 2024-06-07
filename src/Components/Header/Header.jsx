import React, { useContext } from 'react';
import canopyLogo from "/canopy-logo.png";
import micIcon from "/mic.svg";
import userIcon from "/user.svg";
import cartIcon from "/cart.svg";
import { ProductsContext } from '../Context/ProductsContext';
import { Link } from 'react-router-dom';

function Header() {
    const { cart } = useContext(ProductsContext);

    return (
        <nav className='flex justify-between items-center bg-[#0B4A31] py-[20px] px-[50px] fixed top-0 z-50 w-[100%]'>
            <a className='w-[100px] ' href="/">
                <img className='' src={canopyLogo} alt="canopy-logo" />
            </a>
            <div className='justify-center items-center hidden md:flex'>
                <input className='flex justify-between outline-none w-[100px] md:w-[300px] px-[10px] py-[8px] rounded-md' type="text" placeholder='Search Groceries' />
            </div>
            <div className='flex gap-[20px]'>
                <img className='' src={userIcon} alt="user-icon" />
                <Link className='flex justify-center items-center w-[40px] relative' to='/cart'>
                    <img className='' src={cartIcon} alt="cart-icon" />
                    <div className="absolute top-[4px] right-2 -mt-2 -mr-2 bg-white rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                        <span className="text-black font-bold text-[10px]">{cart.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
