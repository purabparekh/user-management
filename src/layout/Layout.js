import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { routes, pageNotFound } from "../routes/routes";
import ContentHolder from "./contentHolder/ContentHolder";

const drawerWidth = {
  open: 240,
  collapsed: 60
};

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    marginLeft: drawerWidth.collapsed,
    width: `calc(100% - ${drawerWidth.collapsed}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth.open,
    width: `calc(100% - ${drawerWidth.open}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth.open,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth.open,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    // width: theme.spacing.unit * 7 + 1,
    width: drawerWidth.collapsed,
    [theme.breakpoints.up("sm")]: {
      //   width: theme.spacing.unit * 9 + 1
      width: drawerWidth.collapsed
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class Layout extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header
          isDrawerOpen={this.state.open}
          onDrawerOpen={this.handleDrawerOpen}
          {...this.props}
        />
        <Sidebar
          isDrawerOpen={this.state.open}
          onDrawerOpen={this.handleDrawerOpen}
          onDrawerClose={this.handleDrawerClose}
          routes={routes}
          {...this.props}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <ContentHolder
            routes={routes}
            pageNotFound={pageNotFound}
            {...this.props}
          />
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Layout);
