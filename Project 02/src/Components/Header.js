import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Covid from "../Images/Covid_logo.jpg";
import { FiMessageSquare, FiShare2, FiInfo } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    background: "linear-gradient(45deg, #fff 30%, #8e2a2c 90%)",
  },
  logo: {
    marginRight: theme.spacing(2),
    height: "2.5rem",
  },
  title: {
    flexGrow: 1,
    color: "#8e2a2c",
    fontSize: "1.2rem",
    fontWeight: "bold",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  icon: {
    color: "#fff",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <img src={Covid} alt="logo" className={classes.logo} />
          <Typography className={classes.title} noWrap>
            Covid-19 Global Tracker App
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <FiShare2 size="1.3rem" className={classes.icon} />
          <FiMessageSquare size="1.3rem" className={classes.icon} />
          <FiInfo size="1.3rem" className={classes.icon} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
