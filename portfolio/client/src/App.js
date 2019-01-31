import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Enter from "./pages/Enter";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contacft";
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
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Enter} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
