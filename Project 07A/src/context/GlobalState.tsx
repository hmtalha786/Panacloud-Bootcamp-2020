import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Initial state
export type transactionType = {
  id: any;
  text: string;
  amount: number;
};

type stateType = {
  transactions: transactionType[];
  deleteTransaction: any;
  addTransaction: any;
};

const initialState: stateType = {
  transactions: [],
  deleteTransaction: null,
  addTransaction: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: any) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transactions: any) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
