import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    // Reset the input states
    setText("");
    setAmount(0);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className=" my-2">
          <label htmlFor="text">Vendor / Category</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="my-2">
          <label htmlFor="amount">Transaction Amount</label>
          <span
            style={{
              fontSize: "0.9rem",
              color: "gray",
              marginTop: "2px",
              marginLeft: "5px",
            }}
          >
            ( -ve for Expense / +ve for Income )
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="addTransactionButton mt-4" variant="outline-light">
          Add Transaction
        </button>
      </form>
    </>
  );
};
