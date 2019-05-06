import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';
import { Link } from 'react-router-dom';

class PetsList extends Component {
  constructor() {
    super();

    this.state = {
      petsList: [],
    };
  }

  componentDidMount() {
    this.getAnimals();
  }

  getAnimals = () => {
    axios.get('/api/petfinder/animals').then(res => {
      this.setState({
        petsList: res.data.data.animals,
      });
    });
  };

  displayAnimals = () => {
    let { petsList } = this.state;
    return petsList.map(pet => {
      return (
        <div key={pet.id}>
          <Link to={`animals/${pet.id}`}>pet</Link>
          <div>{pet.name}</div>
          <div>{pet.description}</div>
          <div>{pet.photos['small']}</div>
        </div>
      );
    });
  };

  render() {
    console.log('Pets List: ', this.state.petsList);
    return (



<MyContext.Consumer>
        {context => {
          return (
            <div>
              <h1>In PetsList </h1>
              <div>{this.displayAnimals()}</div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default PetsList;
