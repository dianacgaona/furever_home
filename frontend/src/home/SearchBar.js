import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <select>
            <label>borough</label>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
          <button>Dog</button>
          <button>Cat</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
