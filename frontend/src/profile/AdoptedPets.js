import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class AdoptedPets extends Component {
  constructor() {
    super();

    this.state = {
      adoptedPets: {}
    };
  }

  componentDidMount() {
    this.getAdopted();
  }

  getAdopted = () => {
    axios
      .get("/petfinder/animals")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <h1>Adopted Pets go here</h1>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default AdoptedPets;
