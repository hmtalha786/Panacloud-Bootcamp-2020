import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";
import { Row, Col } from "react-bootstrap";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  
  return (
    <>
      <h5 className="text-center">Transaction History</h5>
      <p style={{ fontSize: "0.7rem", color: "gray", marginTop: "2px" }} className="text-center">
        Click the list item to delete transaction
      </p>
      <Row className="mx-auto">
        {transactions.map((transaction) => (
          <Col md={3} className="my-3">
            <Transaction key={transaction.id} transaction={transaction} />
          </Col>
        ))}
      </Row>
    </>
  );
};
