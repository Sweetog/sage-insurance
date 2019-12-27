import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import NavbarComponent from "./navbar";

class Routes extends Component {
  render() {
    return (
      <>
     
      <BrowserRouter>
        <NavbarComponent />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
      </>
    );
  }
}

export default Routes;
