import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/redux/reducer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "../../App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // padding: "30px 0",
      backgroundColor: "white",
    },
    title: {
      flexGrow: 1,
      color: "#AF293E",
    },
  })
);
interface Props {}
// eslint-disable-next-line
function Header({}: Props): ReactElement {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link to="/" className="header">
              Start Managing Your Diaries
            </Link>
          </Typography>
          {authenticated && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{ color: "#005ce6" }}
                onClick={() => dispatch(logout())}
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
