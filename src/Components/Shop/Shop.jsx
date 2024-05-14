import React, { useState, useEffect } from 'react';
import Categories from "./Categories";
import CategoryCard from './CategoryCard';

function Shop() {
    const data = Categories;
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const container = document.querySelector('.scroll-container');
        if (container) {
            container.scrollLeft = scrollPosition;
        }
    }, [scrollPosition]);

    const scrollLeft = () => {
        const container = document.querySelector('.scroll-container');
        if (container && scrollPosition > 0) {
            setScrollPosition(scrollPosition - 100);
        }
    };

    const scrollRight = () => {
        const container = document.querySelector('.scroll-container');
        if (container) {
            setScrollPosition(scrollPosition + 100);
        }
    };

    const categoriesData = data.map((item, index) => {
        return <CategoryCard
            key={index}
            item={item}
        />
    });

    return (
        <div className='relative '>
            <main className='flex flex-col mx-[50px]'>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-[30px]'>Shop Groceries</h2>
                    <a className='underline' href="">View all</a>
                </div>
                <div className='flex overflow-auto scroll-container scrollbar-thin scroll-smooth'>
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
    );
}

export default Shop;
