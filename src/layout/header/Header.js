import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import AccountCircle from "@material-ui/icons/AccountCircle";

// import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import logo from "../../assets/ic_logo_login.png";

import { withRouter } from "react-router-dom";

import { logout } from "../../actions/session/sessionActions";

// import history from "../../history.js";

import { connect } from "react-redux";
// import { Redirect } from "react-router/cjs/react-router";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1
  }
});

const Header = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function logout() {
    handleClose();
    props.history.push("/login");
    props.logout();
    // return <Redirect to="/login" />;
  }

  const { classes, isDrawerOpen, loggedInUser } = props;
  const dynamicClasses = useStyles();

  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: isDrawerOpen
      })}
    >
      <Toolbar>
        <div className={dynamicClasses.grow}>
          <img src={logo} alt="logo" width="100px" />
        </div>
        <div>
          <IconButton
            aria-owns={open ? "menu-appbar" : undefined}
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          {/* <Avatar
            alt={loggedInUser.firstName + " " + loggedInUser.lastName}
            src={loggedInUser.thumbnailUrl}
          /> */}
          {loggedInUser.firstName + " " + loggedInUser.lastName}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={handleClose}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            <MenuItem onClick={logout}>Log out</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

// export default Header;

const mapStateToProps = state => ({
  loggedInUser: state.sessionReducer
});

const mapDispatchToProps = dispatch => ({
  logout: payload => dispatch(logout(payload))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
