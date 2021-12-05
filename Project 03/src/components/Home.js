import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
    textAlign: "center",
  },
  carousal: {
    marginTop: 2,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "rgb(245,245,245)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgb(245,245,245)",
    boxShadow: "0 0",
    fontStyle: "italic",
    fontWeight: "light",
    color: "rgb(89, 89, 89)",
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    maxWidth: "70%",
  },
  image: {
    maxWidth: "100%",
  },
  title: {
    fontWeight: 600,
    fontSize: 50,
    fontFamily: "'Sacramento', cursive",
    fontStyle: "italic",
    opacity: 0.7,
    "&:hover": {
      cursor: "pointer",
      opacity: 1,
    },
  },
  sample: {
    maxWidth: "50%",
  },
  list: {
    listStyleType: "none",
  },
  div: {
    marginTop: 50,
    marginBottom: 50,
    fontStyle: "italic",
  },
}));

const Home = () => {
  const { dataState } = useContext(DataContext);
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Carousel className={classes.carousal}>
        {Object.entries(dataState).map(([productID, { name, img, img2 }]) => {
          return (
            <li key={productID} className={classes.list}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                  <Paper className={classes.paper}>
                    <h1>{name}</h1>
                    <p>{dataState[productID].detail}</p>
                    <div className={classes.img}>
                      <img className={classes.image} src={img} alt={name} />
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper className={classes.paper}>
                    <div className={"imgLoad"}>
                      <img className={classes.image} src={img2} alt={name} />
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </li>
          );
        })}
      </Carousel>

      <div className={classes.div}>
        <span
          onClick={() => {
            navigate("products");
          }}
          className={classes.title}
        >
          Our Best Sellings
        </span>
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {Object.entries(dataState).map(([productID, { name, img2 }]) => {
              return (
                <Grid item xs={4}>
                  <span>
                    <img className={classes.sample} src={img2} alt={name} />
                    <h5>{name}</h5>
                  </span>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
