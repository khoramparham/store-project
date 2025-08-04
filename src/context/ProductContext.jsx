import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";
const ProductContext = createContext();
function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get("/products");
        setProduct(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);
  return <ProductContext.Provider value={product}>{children}</ProductContext.Provider>;
}
const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};
const useProductDetails = (id) => {
  const products = useContext(ProductContext);
  const result = products.find((product) => product.id == id);
  return result;
};
export default ProductProvider;
export { useProducts, useProductDetails };
