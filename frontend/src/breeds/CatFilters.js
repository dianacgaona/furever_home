import React, { Component } from "react";

class CatFilters extends Component {
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
          onChange={this.props.handleAge}
        >
          <option disabled selected>
            Age
          </option>
          <option name="age" value="Baby">
            Kitten
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

export default CatFilters;
