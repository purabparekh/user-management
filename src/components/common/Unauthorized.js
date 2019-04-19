import React, { Component } from "react";
import PageTitle from "./PageTitle";

class Unauthorized extends Component {
  render() {
    return <PageTitle text="401: Unauthorized Access" />;
  }
}

export default Unauthorized;
