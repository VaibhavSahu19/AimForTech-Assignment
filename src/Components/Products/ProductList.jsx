import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';

function ProductList() {
    const[productData, setProductData] = useState();

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
    <main className='flex flex-col mx-[50px] mt-[20px]'>
        <div className='flex justify-between'>
            <h2 className='font-semibold text-[30px]'>Fresh in Today</h2>
            <a className='underline' href="">View all</a>
        </div>
        <div className='flex overflow-auto scroll-container scrollbar-thin scroll-smooth'>{products}</div>
    </main>
  )
}

export default ProductList