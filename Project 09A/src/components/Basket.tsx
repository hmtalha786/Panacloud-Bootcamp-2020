import React from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "../global_interface";
import { store, remove } from "../store";

const Basket = () => {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        
        {products
          .filter((product) => product.added)
          .map((product: ProductItem) => {
            return (
              <div
                key={product.id}
                style={{
                  background: "#f5f5f5",
                  margin: "10px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  border: " 5px solid grey",
                }}
              >
                <img
                  alt="Product"
                  src={product.imageUrl}
                  style={{
                    width: "200px",
                    objectFit: "contain",
                    color: "white",
                  }}
                />
                <div style={{ color: "black" }}>
                  <p>{product.title}</p>

                  <p>${(product.price / 100).toFixed(2)}</p>

                  <button
                    className="px-3"
                    style={{
                      backgroundColor: "white",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      height: "30px",
                      background: "red",
                    }}
                    onClick={() => store.dispatch(remove({ id: product.id }))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export { Basket };
