import React, { Component } from "react";
import RouterOutlet from "../../components/common/RouterOutlet";

class ContentHolder extends Component {
  render() {
    return <RouterOutlet {...this.props} />;
  }
}

export default ContentHolder;
