import React from "react";
import { createContext, useEffect, useState, useContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  const pageHandler = (page) => {
       setCurrentPage(page)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ Products , currentPage , pageHandler }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
