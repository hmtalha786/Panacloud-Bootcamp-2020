import React from "react";
import { Basket } from "./Basket";
import { useSelector } from "react-redux";
import { ProductItem } from "../global_interface";

function Header() {
  const products = useSelector((state: ProductItem[]) => state);
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h5 className="navbar-brand">🛍️</h5>
          <h4>Utility Store</h4>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <h5>🛒</h5>
          </button>
        </div>
      </nav>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                You have {products.filter((product) => product.added).length}{" "}
                items in your basket
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Basket />
            </div>
            <div
              className="modal-footer"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p>
                Total 💵 = $
                {(
                  products
                    .filter((product) => product.added)
                    .reduce((total, current) => (total += current.price), 0) /
                  100
                ).toFixed(2)}
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
