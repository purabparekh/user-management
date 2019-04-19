import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Tooltip from "@material-ui/core/Tooltip";

import "./sidebar.css";

class Sidebar extends Component {
  render() {
    const { classes, theme, isDrawerOpen, routes } = this.props;

    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isDrawerOpen,
          [classes.drawerClose]: !isDrawerOpen
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen
          })
        }}
        open={isDrawerOpen}
      >
        <div className={classes.toolbar}>
          {!isDrawerOpen && (
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.onDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: isDrawerOpen
              })}
            >
              <MenuIcon />
            </IconButton>
          )}
          {isDrawerOpen && (
            <IconButton onClick={this.props.onDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          )}
        </div>
        <Divider />
        <List className="remove-top-padding">
          {routes
            .filter(route => route.renderOnScreen)
            .map((route, index) => (
              <Tooltip title={route.name} placement="right" key={index}>
                <ListItem
                  button
                  component={NavLink}
                  exact={route.exactMatch}
                  activeClassName={route.activeClassName}
                  to={route.path}
                >
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItem>
              </Tooltip>
            ))}
        </List>
      </Drawer>
    );
  }
}

export default Sidebar;
