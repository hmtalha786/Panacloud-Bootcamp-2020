import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    position: "static",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "rgb(255,255,255)",
    borderTop: "1px solid rgb(235, 235, 224)",
    color: "Gray",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer>
        <h6>
          USA | Data settings | Do not sell my personal information | Privacy
          Policy | Terms and Conditions | © 2020 adidas America Inc.
        </h6>
      </footer>
    </div>
  );
};

export default Footer;
