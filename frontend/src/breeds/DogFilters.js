import React, { Component } from "react";

class DogFilters extends Component {
  state = {};
  render() {
    return (
      <>
        <select
          className="form_select"
          name="selectedColor"
          onChange={this.props.handleColor}
        >
          <option disabled selected>
            Color
          </option>
          <option name="color" value="Apricot / Beige">
            Apricot / Beige
          </option>
          <option name="color" value="Bicolor">
            Bicolor
          </option>
          <option name="color" value="Black">
            Black
          </option>
          <option name="color" value="Brindle">
            Brindle
          </option>
          <option name="color" value="Gray / Blue / Silver">
            Gray / Blue / Silver
          </option>
          <option name="color" value="Red / Chestnut / Orange">
            Red / Chestnut / Orange
          </option>
          <option name="color" value="Tricolor (Brown, Black, & White)">
            Tricolor (Brown, Black, White)
          </option>
          <option name="color" value="White / Cream">
            White / Cream
          </option>
          <option name="color" value="Yellow / Tan / Blond / Fawn">
            Yellow / Tan / Blond / Fawn
          </option>
        </select>
        <select
          className="form_select"
          name="selectedAge"
          onChange={this.props.handleAge}
        >
          <option disabled selected>
            Age
          </option>
          <option name="age" value="Baby">
            Puppy
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
          onChange={this.props.handleSize}
        >
          <option disabled selected>
            Size
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
          onChange={this.props.handleGender}
        >
          <option disabled selected>
            Gender
          </option>
          <option name="gender" value="Male">
            Male
          </option>
          <option name="gender" value="Female">
            Female
          </option>
        </select>
      </>
    );
  }
}

export default DogFilters;
