import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MyProvider from './provider/MyProvider';
import Navbar from './Navbar/Navbar';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Profile from './profile/Profile';
import OrganizationsList from './organizations/OrganizationsList';
import OrganizationProfile from './organizations/OrganizationProfile';
import CatCare from './community/CatCare';
import DogCare from './community/DogCare';
import SinglePost from './posts/SinglePost';
import PetsList from './pets/PetsList';
import PetProfile from './pets/PetProfile';
import DogBreeds from './breeds/DogBreeds.js';
import CatBreeds from './breeds/CatBreeds.js';
import Form from './PreApproval/Form.js';
import { MyContext } from './provider/MyProvider';
import './css/App.css';

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

            <Route
              path="/user/:id"
              render={props => {
                return (
                  <MyContext.Consumer>
                    {context => (
                      <Profile
                        currentUser={context.state.currentUser}
                        {...props}
                      />
                    )}
                  </MyContext.Consumer>
                );
              }}

            />
            <Route path="/cat-care" component={CatCare} />
            <Route path="/dog-care" component={DogCare} />
            <Route path="/pre-approval" component={Form} />
            <Route
              exact
              path="/shelters-rescues"
              component={OrganizationsList}
            />
            <Route
              path="/posts/:id"
              render={props => {
                return (
                  <MyContext.Consumer>
                    {context => <SinglePost {...context.state} {...props} />}
                  </MyContext.Consumer>
                );
              }}

            />
            <Route
              path="/shelters-rescues/:id"
              component={OrganizationProfile}
            />
            <Route exact path="/animals" component={PetsList} />
            <Route path="/animals/:id" component={PetProfile} />
            <Route path="/dogs" component={DogBreeds} />
            <Route Path="/cats" component={CatBreeds} />
          </Switch>
        </MyProvider>
      </div>
    );
  }
}

export default App;
