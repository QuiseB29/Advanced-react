// src/hooks/useInventory.js
import { useState, useEffect } from 'react';

// Mock data fetching function (replace with real API calls in a real application)
const fetchProducts = async () => {
  return [
    { id: 1, name: 'Product 1', quantity: 10 },
    { id: 2, name: 'Product 2', quantity: 5 },
    { id: 3, name: 'Product 3', quantity: 15 },
  ];
};

const useInventory = () => {
  const [products, setProducts] = useState([]);

  // Fetch products when the hook is first used
  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    fetchData();
  }, []);

  // Add a new product
  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  // Remove a product by id
  const removeProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return {
    products,
    addProduct,
    removeProduct,
  };
};

export default useInventory;
