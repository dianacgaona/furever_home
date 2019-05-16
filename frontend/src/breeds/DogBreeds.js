import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/breeds.css";
import DogFilters from "./DogFilters.js";
import axios from "axios";

class DogBreeds extends Component {
  state = {
    selectedBorough:
      "NY1424,NY587,NY102,NY06,NY1073,NY1297,NY139,NY1145,NY178,NY525,NY874,NY1419,NY1359,NY993,NY1271,NY704,NY887,NY773,NY1043,NY1414,NY434,NY818,NY20,NY1367,NY1400,NY479,NY1422,NY637,NY1192,NY517,NY151,NY652,NY992,NY962,NY1408,NY1113,NY505,NY1199,NY1156,NY1392,NY1211,NY455,NY1293,NY1288,NY606,NY1286,NY644,NY879,NY600,NY729,NY1184,NY803,NY440,NY1317,NY599,NY1047,NY1041,NY1437,NY1278,NY791,NY245,NY1072,NY1122,NY947,NY251,NY790,NY1045,NY744,NY1425,NY864,NY1312,NY1140,NY1023,NY1376,NY100,NY1438,NY955,NY262,NY93,NY794,NY408,NY1416,NY1190,NY488,NY666,NY557,NY161,NY714,NY467,NY1042,NY922,NY693,NY679,NY1115,NY1360,NY123,NY934",
    boroughSelected: false,
    active: false,
    animals: [],
    filteredAnimals: [],
    Manhattan:
      "NY644,NY818,NY1184,NY557,NY744,NY599,NY123,NY1288,NY679,NY955,NY1360,NY693,NY993,NY1192,NY1438,NY704,NY1312,NY262,NY1043,NY1122,NY161,NY251,NY1115,NY714,NY1400,NY1199,NY1392,NY874,NY864,NY1042,NY139,NY1437,NY20,NY440,NY93,NY1041,NY100,NY488,NY245,NY934,NY1286,NY479,NY606",
    Brooklyn:
      "NY803,NY505,NY1278,NY1367,NY1416,NY1317,NY773,NY1190,NY06,NY1297,NY1424,NY794,NY922,NY1072,NY1073,NY467,NY637,NY729,NY1359,NY1023,NY962,NY1140,NY1408,NY947",
    Queens:
      "NY102,NY178,NY992,NY1156,NY879,NY1422,NY600,NY525,NY1211,NY1045,NY666,NY791,NY887,NY151,NY1425,NY1293,NY1113,NY1414,NY1376,NY408,NY1047,NY1145,NY455,NY1419,NY1271,NY790",
    Bronx: "NY587,NY652,NY434,NY517",
    selectedAge: "",
    selectedSize: "",
    selectedColor: "",
    selectedGender: ""
  };

  componentDidMount() {
    this.getAnimals();
  }

  getAnimals = e => {
    if (e) {
      e.preventDefault();
    }
    axios({
      url:
        "/api/petfinder/animalquery",
      method: "post",
      headers: {},
      data: {
        type: "dog",
        organization: this.state.selectedBorough
      }
    }).then(animals => {
      console.log(animals);
      this.setState({
        animals: animals.data.data.animals,
        active: false,
        selectedBorough: true
      });
    });
  };

  handleSelect = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleBoroughChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      prev => {
        this.getAnimals();
      }
    );
  };

  handleColorChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      prev => {
        this.filterByColor();
      }
    );
  };

  handleAgeChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      prev => {
        this.filterByAge();
      }
    );
  };

  handleSizeChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      prev => {
        this.filterBySize();
      }
    );
  };

  handleGenderChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      prev => {
        this.filterByGender();
      }
    );
  };

  filterByGender = () => {
    if (this.state.filteredAnimals.length === 0) {
      let genderFilter = this.state.animals.filter(animals => {
        if (animals.gender === this.state.selectedGender) {
          return animals;
        }
      });
      this.setState({
        filteredAnimals: genderFilter,
        active: true
      });
      console.log(genderFilter);
    } else {
      let genderFilter = this.state.filteredAnimals.filter(animals => {
        if (animals.gender === this.state.selectedGender) {
          return animals;
        }
      });
      this.setState({
        filteredAnimals: genderFilter,
        active: true
      });
      console.log(genderFilter);
    }
  };

  filterByAge = () => {
    if (this.state.filteredAnimals.length === 0) {
      let ageFilter = this.state.animals.filter(animals => {
        if (animals.age === this.state.selectedAge) {
          return animals;
        }
      });
      this.setState({
        filteredAnimals: ageFilter,
        active: true
      });
      console.log(ageFilter);
    } else {
      let ageFilter = this.state.filteredAnimals.filter(animals => {
        if (animals.age === this.state.selectedAge) {
          return animals;
        }
      });
      this.setState({
        filteredAnimals: ageFilter,
        active: true
      });
      console.log(ageFilter);
    }
  };

  filterBySize = () => {
    if (this.state.filteredAnimals.length === 0) {
      let sizeFilter = this.state.animals.filter(animals => {
        if (animals.size === this.state.selectedSize) {
          return animals;
        }
      });
      this.setState({
        filteredAnimals: sizeFilter,
        active: true
      });
      console.log(sizeFilter);
    } else {
      let sizeFilter = this.state.filteredAnimals.filter(animals => {
        if (animals.size === this.state.selectedSize) {
          return animals;
        }
      });
      this.setState({
        filteredAnimals: sizeFilter,
        active: true
      });
      console.log(sizeFilter);
    }
  };

  filterByColor = () => {
    if (this.state.filteredAnimals.length === 0) {
      let colorFilter = this.state.animals.filter(animals => {
        if (animals.colors.primary === this.state.selectedColor) {
          return animals;
        }
        if (animals.colors.primary === null) {
          return "";
        }
      });
      this.setState({
        filteredAnimals: colorFilter,
        active: true
      });
      console.log(colorFilter);
    } else {
      let colorFilter = this.state.filteredAnimals.filter(animals => {
        if (animals.colors.primary === this.state.selectedColor) {
          return animals;
        }
        if (animals.colors.primary === null) {
          return "";
        }
      });
      this.setState({
        filteredAnimals: colorFilter,
        active: true
      });
      console.log(colorFilter);
    }
  };

  displayFiltered = () => {
    let animals = this.state.filteredAnimals;
    return animals.map(animal => {
      let photo = animal.photos;
      return (
        <div key={animal.id} className="animal_single">
          <Link to={`/animals/${animal.id}`}>
            <h1 className="animal_name">
              {animal.name.length > 20
                ? animal.name.slice(0, 20) + "..."
                : animal.name}
            </h1>
          </Link>
          {photo.length === 0 ? (
            <div className="animal_pic">
              <img
                src="https://ak-s.ostkcdn.com/img/mxc/Missing-Image_Dog.png"
                alt=""
              />
            </div>
          ) : (
            <Link to={`/animals/${animal.id}`}>
              <div className="animal_pic">
                <img src={animal.photos[0].medium} alt="" />
              </div>
            </Link>
          )}
          <p className="animal_details">{animal.breed}</p>
          {animal.colors.primary === null ? (
            ""
          ) : (
            <p className="animal_details">{animal.colors.primary}</p>
          )}
          <p className="animal_details">{animal.age}</p>
          <p className="animal_details">{animal.gender}</p>
        </div>
      );
    });
  };

  displayAnimals = () => {
    let animals = this.state.animals;
    return animals.map(animal => {
      let photo = animal.photos;
      return (
        <div key={animal.id} className="animal_single">
          <Link to={`/animals/${animal.id}`}>
            <h1 className="animal_name">
              {animal.name.length > 20
                ? animal.name.slice(0, 20) + "..."
                : animal.name}
            </h1>
          </Link>
          {photo.length === 0 ? (
            <div className="animal_pic">
              <img
                src="https://ak-s.ostkcdn.com/img/mxc/Missing-Image_Dog.png"
                alt=""
              />
            </div>
          ) : (
            <Link to={`/animals/${animal.id}`}>
              <div className="animal_pic">
                <img src={animal.photos[0].medium} alt="" />
              </div>
            </Link>
          )}
          <p className="animal_details">{animal.breed}</p>
          {animal.colors.primary === null ? (
            ""
          ) : (
            <p className="animal_details">{animal.colors.primary}</p>
          )}
          <p className="animal_details">{animal.age}</p>
          <p className="animal_details">{animal.gender}</p>
        </div>
      );
    });
  };

  displayForm = () => {
    return (
      <>
        <div className="form_borough">Find Dogs by Borough</div>
        <div className="selectCont">
          <form className="select_container" onSubmit={this.getAnimals}>
            <select
              className="form_select"
              name="selectedBorough"
              onChange={this.handleBoroughChange}
            >
              <option disabled selected>
                Borough
              </option>
              <option
                name="Manhattan"
                onSubmit={this.getAnimals}
                value={this.state.Manhattan}
              >
                Manhattan
              </option>
              <option
                name="Brooklyn"
                onSubmit={this.getAnimals}
                value={this.state.Brooklyn}
              >
                Brooklyn
              </option>
              <option
                name="Queens"
                onSubmit={this.getAnimals}
                value={this.state.Queens}
              >
                Queens
              </option>
              <option
                name="Bronx"
                onSubmit={this.getAnimals}
                value={this.state.Bronx}
              >
                Bronx
              </option>
            </select>
            {this.state.selectedBorough ? (
              <DogFilters
                handleColor={this.handleColorChange}
                handleAge={this.handleAgeChange}
                handleSize={this.handleSizeChange}
                handleGender={this.handleGenderChange}
              />
            ) : (
              ""
            )}
          </form>
        </div>
      </>
    );
  };

  render() {
    return (
      <>
        <div className="breed_form">{this.displayForm()}</div>
        {this.state.active ? (
          <div className="animal_container">{this.displayFiltered()}</div>
        ) : (
          <div className="animal_container">{this.displayAnimals()}</div>
        )}
      </>
    );
  }
}

export default DogBreeds;
