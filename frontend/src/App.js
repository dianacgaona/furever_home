import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MyProvider from './provider/MyProvider';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Profile from './profile/Profile';
import AdoptedPets from './profile/AdoptedPets';
import OrganizationsList from './organizations/OrganizationsList';
import OrganizationProfile from './organizations/OrganizationProfile';
import CatCare from './community/CatCare';
import DogCare from './community/DogCare';
import SinglePost from './posts/SinglePost';
import PetsList from './pets/PetsList';
import PetProfile from './pets/PetProfile';
import { MyContext } from './provider/MyProvider';

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
            <Route path="/cat-care" component={CatCare} />
            <Route path="/dog-care" component={DogCare} />
            <Route path="/shelters-rescues" component={OrganizationsList} />
            <Route path="/posts/:id" render={(props) => {
              return (
                <MyContext.Consumer>
                  {context => <SinglePost {...context.state} {...props}/>}

                </MyContext.Consumer>
              );
            }} />

            <Route path="/organizations/:id" component={OrganizationProfile} />

            <Route exact path="/animals" component={PetsList} />
            <Route path="/animals/:id" component={PetProfile} />
          </Switch>
        </MyProvider>
      </div>
    );
  }
}

export default App;
