import React, { useState } from 'react'
import Categories from "./Categories"
import CategoryCard from './CategoryCard';

function Shop() {
    const data = Categories;
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        const container = document.querySelector('.scroll-container');
        if (container) {
        setScrollPosition(scrollPosition - 50); // Scroll left by 50 pixels
        container.scrollLeft -= 50;
        }
    };

    const scrollRight = () => {
        const container = document.querySelector('.scroll-container');
        if (container) {
        setScrollPosition(scrollPosition + 50); // Scroll right by 50 pixels
        container.scrollLeft += 50;
        }
    };

    const categoriesData = data.map((item, index) => {
        return <CategoryCard
            key = {index} 
            item = {item}
        />
    })

  return (
    <div className='relative scroll-container'>
        <main className='flex flex-col mx-[50px] '>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-[30px]'>Shop Groceries</h2>
                <a className='underline' href="">View all</a>
            </div>
            <div className='flex overflow-auto'>
                {categoriesData}
            </div>
        </main>
        <button onClick={scrollLeft} className='absolute left-0 top-0 h-full  text-gray-600  hover:text-gray-700 px-3 flex items-center justify-center'>
            <img className='' src='/left-arrow.svg' alt="" />
        </button>
        <button onClick={scrollRight} className='absolute right-0 top-0 h-full  text-gray-600  hover:text-gray-700 px-3 flex items-center justify-center'>
            <img className='' src='/right-arrow.svg' alt="" />
        </button>
    </div>
    
  )
}

export default Shop