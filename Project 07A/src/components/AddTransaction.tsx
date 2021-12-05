import React, { useState, useContext, FormEvent  } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState<string>();
  const [amount, setAmount] = useState<number>();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +Number(amount),
    };

    addTransaction(newTransaction);

    // Reset the input states
    setText("");
    setAmount(0);
  };

  return (
    <>
      <form>
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
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>
        <button
          onSubmit={onSubmit}
          className="addTransactionButton mt-4"
          // variant="outline-light"
        >
          Add Transaction
        </button>
      </form>
    </>
  );
};
