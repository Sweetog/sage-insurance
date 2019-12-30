import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";

class Routes extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
      </>
    );
  }
}

export default Routes;
