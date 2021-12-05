import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div
      className={transaction.amount < 0 ? "mlist" : "plist"}
      onClick={() => deleteTransaction(transaction.id)}
    >
      <Row>
        <Col md={6} className="text-center">
          {transaction.text}{" "}
        </Col>

        <Col md={6}>
          {sign}
          {moneyFormatter(transaction.amount)}{" "}
        </Col>
      </Row>
    </div>
  );
};
