import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Apply from "../components/apply";
import Footer from "../components/footer";

class Routes extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/apply" component={Apply} />
      </BrowserRouter>
      <Footer/>
      </>
    );
  }
}

export default Routes;
