import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';

function ProductList() {
    const[productData, setProductData] = useState();
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const container = document.querySelector('.scroll-ProductsContainer');
        if (container) {
            container.scrollLeft = scrollPosition;
        }
    }, [scrollPosition]);

    const scrollLeft = () => {
        const container = document.querySelector('.scroll-ProductsContainer');
        if (container && scrollPosition > 0) {
            setScrollPosition(scrollPosition - 100);
        }
    };

    const scrollRight = () => {
        const container = document.querySelector('.scroll-ProductsContainer');
        if (container && scrollPosition < 3100) {
            setScrollPosition(scrollPosition + 100);
        }
    };

    async function fetchData() {
        try {
            const response = await axios.get('https://fruitapi-mf2v.onrender.com/data');
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
    useEffect(() => {
        const fetchDataFromApi = async () => {
            const data = await fetchData();
            if (data) {
                setProductData(data);
            }
        };
        fetchDataFromApi();
    }, [])

    const products = productData?.map((product, index) => {
        return <ProductCard
            key={index}
            product = {product}
        />
    })


  return (
    <div className="relative">
        <main className='flex flex-col mx-[50px] mt-[20px]'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-[30px]'>Fresh in Today</h2>
                <a className='underline' href="">View all</a>
            </div>
            <div className='flex overflow-auto scroll-ProductsContainer scrollbar-thin scroll-smooth'>{products}</div>
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

export default ProductList