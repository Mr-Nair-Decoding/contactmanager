import React, { Component } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/contacts/Contacts";

import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import { Provider } from "./context";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route
                  exact
                  path="/contacts/add"
                  component={AddContact}
                ></Route>
                <Route
                  exact
                  path="/contacts/edit"
                  component={EditContact}
                ></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
