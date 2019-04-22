import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class AdoptedPets extends Component {
  constructor() {
    super();

    this.state = {
      adoptedPets: []
    };
  }

  componentDidMount() {
    this.getAdopted();
  }

  getAdopted = () => {
    axios
      .get("/adopted/users/1")
      .then(res => {
        this.setState({
          adoptedPets: res.data.adopted
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayAdopted = () => {
    let adoptedByUser = this.state.adoptedPets.map((adopted, i) => {
      return (
        <img
          src={`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${
            adopted.pet_id
          }/1/?bust=1555622095&width=300`}
          alt=""
        />
      );
    });
    return <>{adoptedByUser}</>;
  };


  render() {
    // console.log(this.state);
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <h1>Adopted Pets go here</h1>
              {this.displayAdopted()}
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default AdoptedPets;


// };
