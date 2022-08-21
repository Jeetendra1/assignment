import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const host = "http://localhost:5000";

  let productInitialized = [];
  const [products, setProduct] = useState(productInitialized);

  const getProductList = async () => {
    try {
      const url = `${host}/`;
      console.log(url);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setProduct(json);
    } catch (error) {
      console.log(error.msg);
    }
  };

  const updateMostViewedProduct = async (id) => {
    try {
      const url = `${host}/product/${id}`;
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error.msg);
    }
  };

  const getMostViewedProductList = async () => {
    try {
      const url = `${host}/mostviewed/product`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setProduct(json);
    } catch (error) {
      console.log(error.msg);
    }
  };

  return (
    <ProductContext.Provider value={{ products, getProductList, updateMostViewedProduct, getMostViewedProductList }}>
      {props.children} 
    </ProductContext.Provider>
  );
};

export default ProductState;
