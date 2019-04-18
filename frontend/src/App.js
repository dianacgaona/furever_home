import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MyProvider from "./provider/MyProvider";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./profile/Profile";
import AdoptedPets from "./profile/AdoptedPets";
import OrganizationProfile from "./organizations/OrganizationProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/adopted" component={AdoptedPets} />
            <Route
              exact
              path="/organizations"
              component={OrganizationProfile}
            />
          </Switch>
        </MyProvider>
      </div>
    );
  }
}

export default App;
