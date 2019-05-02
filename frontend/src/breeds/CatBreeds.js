import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/breeds.css";
import axios from "axios";

class CatBreeds extends Component {
  state = {
    selectedBorough: "",
    active: false,
    animals: [],
    filteredAnimals: [],
    Manhattan:
      "NY644,NY818,NY1184,NY557,NY744,NY599,NY123,NY1288,NY679,NY955,NY1360,NY693,NY993,NY1192,NY1438,NY704,NY1312,NY262,NY1043,NY1122,NY161,NY251,NY1115,NY714,NY1400,NY1199,NY1392,NY874,NY864,NY1042,NY139,NY1437,NY20,NY440,NY93,NY1041,NY100,NY488,NY245,NY934,NY1286,NY479,NY606",
    Brookyln:
      "NY803,NY505,NY1278,NY1367,NY1416,NY1317,NY773,NY1190,NY06,NY1297,NY1424,NY794,NY922,NY1072,NY1073,NY467,NY637,NY729,NY1359,NY1023,NY962,NY1140,NY1408,NY947",
    Queens:
      "NY102,NY178,NY992,NY1156,NY879,NY1422,NY600,NY525,NY1211,NY1045,NY666,NY791,NY887,NY151,NY1425,NY1293,NY1113,NY1414,NY1376,NY408,NY1047,NY1145,NY455,NY1419,NY1271,NY790",
    Bronx: "NY587,NY652,NY434,NY517",
    selectedAge: "",
    selectedSize: "",
    selectedColor: "",
    selectedGender: ""
  };

  getAnimals = e => {
    if (e) {
      e.preventDefault();
    }
    axios({
      url: "http://localhost:3000/petfinder/animalquery",
      method: "post",
      headers: {},
      data: {
        type: "cat",
        organization: this.state.selectedBorough
      }
    }).then(animals => {
      console.log(animals);
      this.setState({
        animals: animals.data.data.animals,
        active: false
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
  };

  filterByAge = () => {
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
  };

  filterBySize = () => {
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
  };

  filterByColor = () => {
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
  };

  displayFiltered = () => {
    let animals = this.state.filteredAnimals;
    return animals.map(animal => {
      let photo = animal.photos;
      return (
        <div key={animal.id} className="animal_single">
          <Link to={`/animals/${animal.id}`}>
            <h1 className="animal_name">{animal.name}</h1>
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
            <h1 className="animal_name">{animal.name}</h1>
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
        <div className="form_borough">Find Cats by Borough</div>
        <form onSubmit={this.getAnimals}>
          <select
            className="form_select"
            name="selectedBorough"
            onChange={this.handleBoroughChange}
          >
            <option disabled selected>
              Select a borough
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
              value={this.state.Brookyln}
            >
              Brookyln
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
          <select
            className="form_select"
            name="selectedColor"
            onChange={this.handleColorChange}
          >
            <option disabled selected>
              Select a Color
            </option>
            <option name="color" value="Black">
              Black
            </option>
            <option name="color" value="Black & White / Tuxedo">
              Black & White / Tuxedo
            </option>
            <option name="color" value="Buff / Tan / Fawn">
              Buff / Tan / Fawn
            </option>
            <option name="color" value="Calico">
              Calico
            </option>
            <option name="color" value="Gray / Blue / Silver">
              Gray / Blue / Silver
            </option>
            <option name="color" value="Gray & White">
              Gray & White
            </option>
            <option name="color" value="Orange / Red">
              Orange / Red
            </option>
            <option name="color" value="Orange & White">
              Orange & White
            </option>
            <option name="color" value="Tabby (Gray / Blue / Silver)">
              Tabby (Gray / Blue / Silver)
            </option>
            <option name="color" value="Tabby (Brown / Chocolate)">
              Tabby (Brown / Chocolate)
            </option>
            <option name="color" value="Tabby (Buff / Tan / Fawn)">
              Tabby (Buff / Tan / Fawn)
            </option>
            <option name="color" value="Tabby (Orange / Red)">
              Tabby (Orange / Red)
            </option>
            <option name="color" value="Tabby (Tiger Striped)">
              Tabby (Tiger Striped)
            </option>
            <option name="color" value="Torbie">
              Torbie
            </option>
            <option name="color" value="Tortoiseshell">
              Tortoiseshell
            </option>
            <option name="color" value="White">
              White
            </option>
          </select>
          <select
            className="form_select"
            name="selectedAge"
            onChange={this.handleAgeChange}
          >
            <option disabled selected>
              Select an Age
            </option>
            <option name="age" value="Baby">
              Baby
            </option>
            <option name="age" value="Young">
              Young
            </option>
            <option name="age" value="Adult">
              Adult
            </option>
            <option name="age" value="Senior">
              Senior
            </option>
          </select>
          <select
            className="form_select"
            name="selectedSize"
            onChange={this.handleSizeChange}
          >
            <option disabled selected>
              Select a Size
            </option>
            <option name="size" value="Small">
              Small
            </option>
            <option name="size" value="Medium">
              Medium
            </option>
            <option name="size" value="Large">
              Large
            </option>
          </select>
          <select
            className="form_select"
            name="selectedGender"
            onChange={this.handleGenderChange}
          >
            <option disabled selected>
              Select By Gender
            </option>
            <option name="gender" value="Male">
              Male
            </option>
            <option name="gender" value="Female">
              Female
            </option>
          </select>
        </form>
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
export default CatBreeds;
