import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { Router } from "react-router-dom";
import RouterOutlet from "./components/common/RouterOutlet";
import { appBaseURL, appRoutes, pageNotFound } from "./routes/appRoutes";
import history from "./history.js";
import store from "./store";

class App extends Component {
  state = {
    storeLoaded: false
  };

  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        storeLoaded: store.getState().storageAwareReducer
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { storeLoaded } = this.state;
    return (
      <Router basename={appBaseURL} history={history}>
        {storeLoaded && (
          <RouterOutlet routes={appRoutes} pageNotFound={pageNotFound} />
        )}
      </Router>
    );
  }
}

export default App;
