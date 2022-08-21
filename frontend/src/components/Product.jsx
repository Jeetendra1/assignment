import React, { useContext, useEffect, useRef, useState } from "react";
import imageUrl from "./dummy_image.png";
import ProductContext from "../context/ProductContext";
import "../css/Product.css";
import ProductDetailsModel from "./ProductDetailsModel";

const Product = () => {
  const context = useContext(ProductContext);
  const { products, getProductList, updateMostViewedProduct } = context;
  useEffect(() => {
    getProductList();
  }, []);
  const viewProduct = (currentProduct) => {
    ref.current.click();
    setProduct({
      pid: currentProduct.id,
      pname: currentProduct.name,
      pprice: currentProduct.price,
      pdescription: currentProduct.description,
      pproductViewed: currentProduct.productViewed,
    });
    updateMostViewedProduct(currentProduct.id);
  };
  const ref = useRef(null);
  const [product, setProduct] = useState({
    pid: "",
    pname: "",
    pprice: "",
    pdescription: "",
    pproductViewed: "",
  });
  return (
    <>
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Product Details
      </button>
      <ProductDetailsModel productDetail={product} imageUrl={imageUrl} viewProductDetails={true} />
      <div className="my-3">
        <h2 className="productheading"> Product List </h2>
        <hr />
        <div className="row my-3">
          {products.map((product, index) => {
            return (
              <div
                className="card mx-3 my-3"
                key={index}
                style={{ width: "18rem" }}
              >
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> {product.name} </h5>
                  <p className="card-text"> {product.description}.</p>
                  <p className="card-text">
                    <i className="mx-2 fa-solid fa-dollar-sign"></i>
                    <strong>{product.price}</strong>.
                  </p>
                  <i data-toggle="tooltip" data-placement="top" title="Product Details"
                    className="fa fa-eye"
                    onClick={() => {
                      viewProduct(product);
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
