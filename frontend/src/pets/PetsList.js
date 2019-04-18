import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class PetsList extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.getAnimals();
  }

  getAnimals = () => {
    axios.get("/petfinder/animals").then(res => {
      debugger;
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <h1>In PetsList </h1>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default PetsList;
