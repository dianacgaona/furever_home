import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class PetsList extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <h1>here</h1>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default PetsList;
