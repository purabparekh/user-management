import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterOutlet from "./components/common/RouterOutlet";
import { appRoutes, pageNotFound } from "./routes/appRoutes";

class App extends Component {
  render() {
    return (
      <Router>
        <RouterOutlet routes={appRoutes} pageNotFound={pageNotFound} />
      </Router>
    );
  }
}

export default App;
