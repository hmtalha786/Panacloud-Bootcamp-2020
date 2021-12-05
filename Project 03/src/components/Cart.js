import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { DataContext } from "../Context/DataContext";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 70,
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
  },
  list: {
    listStyleType: "none",
  },
  item: {
    flex: "5%",
  },
  grid: {
    maxWidth: "100%",
  },
  img: {
    maxWidth: "30%",
  },
  ul: {
    paddingLeft: 25,
  },
  heading: {
    fontFamily: "'Sacramento', cursive",
    fontStyle: "italic",
    fontSize: 60,
    opacity: 0.6,
    marginBottom: 20,
    marginTop: 50,
  },
  empty: {
    fontFamily: "'Sacramento', cursive",
    fontStyle: "italic",
    fontSize: 60,
    opacity: 0.6,
    marginBottom: 30,
    marginTop: 100,
    textAlign: "center",
  },
  count: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  total: {
    fontSize: 25,
    opacity: 0.7,
    marginBottom: 20,
    marginTop: 50,
  },
  button: {
    padding: "12px 20px",
  },
  checkout: {
    marginTop: 30,
    fontSize: 18,
  },
}));

const Cart = () => {
  const [reRender, setReRender] = useState(false);
  const { dataState } = useContext(DataContext);
  const navigate = useNavigate();
  const classes = useStyles();

  const { items, deleteItem, increaseItem, decreaseItem, checkout } =
    useContext(CartContext);

  const handleDecrease = (event) => {
    let equalOne = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].productID === event && items[i].quantity === 1) {
        equalOne = true;
      }
    }

    if (equalOne) {
      deleteItem(event);
    } else {
      decreaseItem(event);
    }
    setReRender(!reRender);
  };

  const totalAmount = () => {
    let amount = 0;
    for (let i = 0; i < items.length; i++) {
      amount = amount + dataState[items[i].productID].price * items[i].quantity;
    }
    return amount;
  };

  if (totalAmount() === 0) {
    return <h1 className={classes.empty}>Empty!</h1>;
  }
  return (
    <div className={"cartRoot"}>
      <div className={classes.root}>
        <h1 className={classes.heading}>Cart</h1>
        <ul className={classes.ul}>
          <Grid container spacing={3} className={classes.grid}>
            {items.map((itemObj) => {
              return (
                <Grid item xs={12} sm={12} lg={12} className={classes.grid}>
                  <li key={itemObj.productID} className={classes.list}>
                    <Paper className={classes.paper}>
                      <div className={classes.content}>
                        <span className={classes.item}>
                          {" "}
                          {dataState[itemObj.productID].name}{" "}
                        </span>
                        <span>
                          <img
                            src={dataState[itemObj.productID].img2}
                            alt={""}
                            className={classes.img}
                          />
                        </span>
                        <span className={classes.item}>
                          {" "}
                          ${dataState[itemObj.productID].price}{" "}
                        </span>
                        <span className={classes.item}>
                          <Button
                            className={classes.button}
                            style={{
                              maxWidth: "20px",
                              maxHeight: "20px",
                              minWidth: "20px",
                              minHeight: "20px",
                            }}
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                              increaseItem(itemObj.productID);
                              setReRender(!reRender);
                            }}
                          >
                            <AddIcon />
                          </Button>
                          <Button
                            className={classes.button}
                            style={{
                              maxWidth: "20px",
                              maxHeight: "20px",
                              minWidth: "20px",
                              minHeight: "20px",
                            }}
                          >
                            {" "}
                            {itemObj.quantity}{" "}
                          </Button>
                          <Button
                            className={classes.button}
                            style={{
                              maxWidth: "20px",
                              maxHeight: "20px",
                              minWidth: "20px",
                              minHeight: "20px",
                            }}
                            variant="outlined"
                            color="primary"
                            onClick={() => handleDecrease(itemObj.productID)}
                          >
                            <RemoveIcon />
                          </Button>
                        </span>
                        <span className={classes.item}>
                          <Button
                            className={classes.button}
                            style={{
                              maxWidth: "20px",
                              maxHeight: "20px",
                              minWidth: "20px",
                              minHeight: "10px",
                            }}
                            variant="outlined"
                            color="secondary"
                            onClick={() => {
                              deleteItem(itemObj.productID);
                              setReRender(!reRender);
                            }}
                          >
                            {" "}
                            x{" "}
                          </Button>
                        </span>
                      </div>
                    </Paper>
                  </li>
                </Grid>
              );
            })}
          </Grid>
        </ul>
        <h3 className={classes.total}>Total - ${totalAmount()}</h3>
        <Button
          className={classes.checkout}
          variant="outlined"
          color="secondary"
          onClick={() => {
            checkout();
            navigate("/");
            setReRender(!reRender);
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
