import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MyProvider from "./provider/MyProvider";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./profile/Profile";
import AdoptedPets from "./profile/AdoptedPets";
import OrganizationsList from "./organizations/OrganizationsList";
import OrganizationProfile from "./organizations/OrganizationProfile";
import CatCare from "./community/CatCare";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/adopted" component={AdoptedPets} />
            <Route path="/catcare" component={CatCare} />
            <Route path="/organizations" component={OrganizationsList} />
            <Route
              path="/organizationprofile"
              component={OrganizationProfile}
            />
          </Switch>
        </MyProvider>
      </div>
    );
  }
}

export default App;
