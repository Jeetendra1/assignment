import React, { useContext, useEffect, useRef, useState } from "react";
import imageUrl from "./dummy_image.png";
import ProductContext from "../context/ProductContext";
import ProductDetailsModel from "./ProductDetailsModel";
import "../css/Product.css";

const MostViewProduct = () => {
  const context = useContext(ProductContext);
  const { products, getMostViewedProductList } = context;
  useEffect(() => {
    getMostViewedProductList();
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
                  <p className="card-text">
                  <i data-toggle="tooltip" data-placement="top" title="Product Details"
                    className="fa fa-eye mx-3"
                    onClick={() => {
                      viewProduct(product);
                    }}
                  ></i>
                   {product.productViewed} times.</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MostViewProduct;
