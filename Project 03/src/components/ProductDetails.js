import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { CartContext } from "../Context/CartContext";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 40,
    marginTop: 70,
    marginLeft: 50,
    marginRight: 50,
    color: theme.palette.text.secondary,
    fontSize: 18,
  },
  img: {
    maxWidth: "30%",
  },
  div: {
    textAlign: "center",
  },
}));

const ProductDetails = () => {
  const { productID } = useParams();
  const { dataState } = useContext(DataContext);
  const { addItem, items } = useContext(CartContext);
  const classes = useStyles();

  const handleAddition = (event) => {
    if (!items.find((item) => item.productID === event)) {
      const productObj = {
        productID: event,
        quantity: 1,
      };
      addItem(productObj);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item sm={12}>
          <h2>{dataState[productID].name}</h2>
          <h2>${dataState[productID].price}</h2>
          <hr />
          <p>{dataState[productID].detail}</p>
          <div className={classes.div}>
            <span>
              <img
                src={dataState[productID].img2}
                alt={productID}
                className={classes.img}
              />
            </span>
            <span>
              <img
                src={dataState[productID].img}
                alt={productID}
                className={classes.img}
              />
            </span>
            <br />
            <br />
            <Button
              className={classes.button}
              onClick={() => handleAddition(productID)}
              variant="outlined"
              color="primary"
            >
              Add to Cart
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
