import React, { Component } from "react";
import { Redirect } from "react-router";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

const AUTHENTICATION_RESULTS = {
  VALID: "Valid",
  REDIRECT_TO_LOGIN: "RedirectToLogin",
  REDIRECT_TO_UNAUTHORIZED: "RedirectToUnauthorized"
};
class RouterOutlet extends Component {
  authenticateRoute = route => {
    const { loggedInUser } = this.props;
    if (route.loginRequired && !loggedInUser) {
      return AUTHENTICATION_RESULTS.REDIRECT_TO_LOGIN;
    }
    if (
      route.loginRequired &&
      loggedInUser &&
      (route.accessibleTo === "*" ||
        route.accessibleTo.includes(loggedInUser.role))
    ) {
      return AUTHENTICATION_RESULTS.VALID;
    }
    if (!route.loginRequired && route.accessibleTo === "*") {
      return AUTHENTICATION_RESULTS.VALID;
    }
    return AUTHENTICATION_RESULTS.REDIRECT_TO_UNAUTHORIZED;
  };

  render() {
    const { routes, pageNotFound } = this.props;
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exactMatch}
            path={route.path}
            render={() => {
              const authResult = this.authenticateRoute(route);
              switch (authResult) {
                case AUTHENTICATION_RESULTS.VALID:
                  return React.createElement(route.component);
                case AUTHENTICATION_RESULTS.REDIRECT_TO_UNAUTHORIZED:
                  return <Redirect to="/unauthorized" />;
                default:
                  return <Redirect to="/login" />;
              }
            }}
          />
        ))}
        <Route component={pageNotFound.component} />
      </Switch>
    );
  }
}

const mapStateToProps = state => () => {
  return {
    loggedInUser: state.sessionReducer
  };
};

export default connect(mapStateToProps)(RouterOutlet);
