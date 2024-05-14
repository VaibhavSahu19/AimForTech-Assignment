import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productFound, setProductFound] = useState(false);

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
                setProducts(data);
            }
        };
        fetchDataFromApi();
    }, [])

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].qty += 1;
        setCart(updatedCart);
    } else {
        setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
