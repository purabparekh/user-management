import React, { Component } from "react";
import { Redirect } from "react-router";
import { Route, Switch } from "react-router-dom";
import isEqual from "lodash/isEqual";

// import { connect } from "react-redux";
import store from "../../store";

const AUTHENTICATION_RESULTS = {
  VALID: "Valid",
  REDIRECT_TO_LOGIN: "RedirectToLogin",
  REDIRECT_TO_UNAUTHORIZED: "RedirectToUnauthorized"
};
class RouterOutlet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: store.getState().sessionReducer
    };
  }
  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      // console.log("Inside RouterOutlet subscription", store.getState());
      const loggedInUser = store.getState().sessionReducer;
      if (!isEqual(this.state.loggedInUser, loggedInUser)) {
        this.setState({
          loggedInUser
        });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  authenticateRoute = route => {
    const { loggedInUser } = this.state;
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
    // console.log(this.props);
    const { routes, pageNotFound } = this.props;
    // const { loggedInUser } = this.state;
    // console.log(this.props);
    // console.log("loggedInUser", loggedInUser);
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exactMatch}
            path={route.path}
            render={() => {
              const authResult = this.authenticateRoute(route);
              // console.log(route, loggedInUser, authResult);
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

export default RouterOutlet;

// const mapStateToProps = state => () => {
//   // console.log(state);
//   return {
//     loggedInUser: state.sessionReducer
//   };
// };

// export default connect(mapStateToProps)(RouterOutlet);
