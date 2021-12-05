import React from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "../global_interface";
import { store, add } from "../store";

const Product = () => {
  const products = useSelector((state: ProductItem[]) => state);
  // console.log(products);
  return (
    <div className="mt-5">
      <div className=" mt-5">
        You have {products.filter((product) => product.added).length} items in
        your basket
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product: ProductItem) => (
          <div
            key={product.id}
            style={{
              background: "#f5f5f5",
              margin: "10px",
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              border: " 5px solid lightblue",
              width: "300px",
              color: "black",
            }}
          >
            <img
              className="mt-5"
              src={product.imageUrl}
              alt="product"
              width="200px"
              style={{ margin: "0 auto" }}
            />

            <h6 className="my-3">{product.title}</h6>

            <button
              disabled={product.added}
              onClick={() => store.dispatch(add(product))}
              style={{
                backgroundColor: "white",
                color: "white",
                border: "none",
                cursor: "pointer",
                height: "40px",
                background: "lightgreen",
              }}
            >
              Add to basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
