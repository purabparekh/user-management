import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterOutlet from "./components/common/RouterOutlet";
import { appBaseURL, appRoutes, pageNotFound } from "./routes/appRoutes";

class App extends Component {
  render() {
    return (
      <Router basename={appBaseURL}>
        <RouterOutlet routes={appRoutes} pageNotFound={pageNotFound} />
      </Router>
    );
  }
}

export default App;
