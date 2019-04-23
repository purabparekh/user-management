import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { Router } from "react-router";
import RouterOutlet from "./components/common/RouterOutlet";
import { appBaseURL, appRoutes, pageNotFound } from "./routes/appRoutes";
// import history from "./history.js";
import store from "./store";

class App extends Component {
  state = {
    storeLoaded: false
  };

  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      if (this.state.storeLoaded !== store.getState().storageAwareReducer) {
        // console.log("Setting App state...");
        this.setState({
          storeLoaded: store.getState().storageAwareReducer
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // console.log("App :", this.state.storeLoaded);
    const { storeLoaded } = this.state;
    return (
      <Router basename={appBaseURL}>
        {storeLoaded && (
          <RouterOutlet routes={appRoutes} pageNotFound={pageNotFound} />
        )}
      </Router>
    );
  }
}

export default App;
