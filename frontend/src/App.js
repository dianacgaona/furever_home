import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MyProvider from "./provider/MyProvider";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
<<<<<<< HEAD
import Organizations from "./Organizations";
=======
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./profile/Profile";
import AdoptedPets from "./profile/AdoptedPets";
import OrganizationsList from "./organizations/OrganizationsList";
import OrganizationProfile from "./organizations/OrganizationProfile";
import CatCare from "./community/CatCare";
import DogCare from "./community/DogCare";
>>>>>>> a4cc89167551d34393c2fa7cc1a684980c795a70

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
<<<<<<< HEAD
            <Route path="/breeds" component={Navbar} />
            <Route path="/community" component={Navbar} />
            <Route path="/organizations" component={Organizations} />
=======
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/adopted" component={AdoptedPets} />
            <Route path="/cat-care" component={CatCare} />
            <Route path="/dog-care" component={DogCare} />
            <Route path="/shelters-rescues" component={OrganizationsList} />
            <Route
              path="/organizationprofile"
              component={OrganizationProfile}
            />
>>>>>>> a4cc89167551d34393c2fa7cc1a684980c795a70
          </Switch>
        </MyProvider>
      </div>
    );
  }
}

export default App;
