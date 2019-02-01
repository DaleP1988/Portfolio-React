import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Enter from "./pages/Enter";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// login form
//

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Enter} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
