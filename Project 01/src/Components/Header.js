import React, { useState } from "react";
import { Container, Navbar, Button, Modal } from "react-bootstrap";
import { AddTransaction } from "./AddTransaction";

export const Header = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="my-3">
        <Navbar.Brand href="#home">Expense Tracker App</Navbar.Brand>

        <Button variant="outline-light" onClick={handleShow}>
          {" "}
          + New Transaction{" "}
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddTransaction />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Navbar>
  );
};
