import React, { Component } from "react";
const axios = require("axios");

class Organizations extends Component {
  state = {
    shelters: []
  };

  componentDidMount() {
    this.getShelters();
  }

  getShelters = () => {
    axios.get("http://localhost:3100/petfinder/organizations").then(data => {
      this.setState({
        shelters: data.data.organizations
      });
      console.log(data);
    });
  };

  render() {
    let ny = this.state.shelters.map(shelter => {
      if (shelter.city === "New York" && shelter.state === "NY") {
        return (
          <>
            <option>{shelter.name}</option>
          </>
        );
      } else {
        return <>{""}</>;
      }
    });

    return (
      <>
        <select>{ny}</select>
      </>
    );
  }
}

export default Organizations;
