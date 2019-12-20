import React, { Component } from "react";
import { Provider } from "react-redux";

import "./styles/App.scss";
import Routes from "./components/routes"
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
