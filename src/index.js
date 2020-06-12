import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Happy from "./components/Happy";
import Sleepy from "./components/Sleepy";
import Guilty from "./components/Guilty";

// your code goes here
class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/happy">Happy</Link>
              </li>
              <li>
                <Link to="/sleepy">Sleepy</Link>
              </li>
              <li>
                <Link to="/guilty">Guilty</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/happy">
              <Happy />
            </Route>
            <Route path="/sleepy">
              <Sleepy />
            </Route>
            <Route path="/guilty">
              <Guilty />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
