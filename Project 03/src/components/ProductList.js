import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { CartContext } from "../Context/CartContext";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginBottom: 50,
    marginTop: 100,
    maxWidth: "100%",
  },
  list: {
    listStyleType: "none",
  },
  link: {
    marginLeft: theme.spacing(2),
    color: theme.palette.text.secondary,
    textDecoration: "none",
  },
  grid: {
    maxWidth: "100%",
  },
  img: {
    maxWidth: "80%",
  },
  heading: {
    fontFamily: "'Sacramento', cursive",
    fontStyle: "italic",
    fontSize: 60,
    opacity: 0.6,
    marginBottom: 20,
    marginTop: 50,
  },
  ul: {
    paddingLeft: 25,
  },
}));

const ProductList = () => {
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
      <h1 className={classes.heading}>Available Products</h1>
      <ul className={classes.ul}>
        <Grid container spacing={3} className={classes.grid}>
          {Object.entries(dataState).map(
            ([productID, { name, img2, price }]) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <li key={productID} className={classes.list}>
                    <h3>{name}</h3>
                    <h3>${price}</h3>
                    <img className={classes.img} src={img2} alt={name} />
                    <Button
                      onClick={() => handleAddition(productID)}
                      variant="outlined"
                      color="primary"
                    >
                      Add to Cart
                    </Button>
                    <Link to={productID} className={classes.link}>
                      <Button
                        onClick={() => handleAddition(productID)}
                        variant="outlined"
                        color="secondary"
                      >
                        Details
                      </Button>
                    </Link>
                  </li>
                  <br />
                  <br />
                </Grid>
              );
            }
          )}
        </Grid>
      </ul>
    </div>
  );
};

export default ProductList;
