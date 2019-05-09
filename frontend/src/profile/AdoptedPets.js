import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';
import { Paper } from '@material-ui/core';
import '../css/profile.css';

class AdoptedPets extends Component {
  constructor() {
    super();
    this.state = {
      adoptedPets: [],
    };
  }

  componentDidMount() {
    this.getAdopted(this.props.id);
  }

  getAdopted = id => {
    axios
      .get(`/api/adopted/users/${id}`)
      .then(res => {
        this.setState({
          adoptedPets: res.data.adopted,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayAdopted = () => {
    let adoptedPets = this.state.adoptedPets;
    return adoptedPets.map(pet => {
      return (
        <div key={pet.id} className='adoptedContainer'>
          <div className="adoptImg">
            <img
              src={`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${
                pet.pet_id
              }/1/?bust=1555622095&width=300`}
              alt=""
            />
          </div>
        </div>
      );
    });
  };

  render() {
    return (



<MyContext.Consumer>
        {context => {
          return (
            <div>
              <Paper style={{ padding: '2%', marginTop: '1%' }}>
                <p className="adoptedTitle">Adopted Pets</p>
                <div className='adoptPetImg'>{this.displayAdopted()}</div>
              </Paper>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default AdoptedPets;

// };
