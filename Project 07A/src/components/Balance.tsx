import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num:any) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc: any, num: any, i: any, orig: any) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <Container>
      <Row className="text-center my-5">
        <Col md={4}>
          <div className="inexp balance">
            <h4 className="money">Account Balance</h4>
            <p>{moneyFormatter(total)}</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="inexp plus">
            <h4 className="money">Total Income</h4>
            <p>{moneyFormatter(income)}</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="inexp minus">
            <h4 className="money">Total Expense</h4>
            <p>{moneyFormatter(expense)}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
