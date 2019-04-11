import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Navbar/>

          <Switch>

            <Route exact path="/" component={Home}/>

            <Route path="/breeds" component={Navbar}/>

            <Route path="/resources" component={Navbar}/>

          </Switch>

      </div>
    );
  }
}

export default App;
